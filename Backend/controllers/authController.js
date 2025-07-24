const FormData = require("form-data");
const Mailgun = require("mailgun.js");
require('dotenv').config();
const prisma = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
  // url: "https://api.eu.mailgun.net"  // only if EU domain
});

// create the jwt token
const generateToken = (user) => {
  return jwt.sign(
    // only give these fiels
    { userId: user.userId, username: user.username },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );
};
function generateRefreshToken(user) {
  //  frontend can ask for a new access token without the user logging in again
  return jwt.sign(
    { userId: user.userId, username: user.username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "2d" }
  );
}

exports.googleCallback = async (req, res) => {
  // comes back from passport using those google credientials
  // and then we handle it like normal using JWT for the sessions
  const user = req.user;

  const accessToken = generateToken(user);

  const refreshToken = generateRefreshToken(user);

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "Strict",
        secure: false,
        maxAge: 2 * 24 * 60 * 60 * 1000
    });
    const frontendUrl = process.env.FRONTEND_URL

    res.redirect(`${frontendUrl}?accessToken=${accessToken}`);
};

// sign up
// -> /auth/signup
exports.signup = async (req, res) => {
  try {
    const { username, email, name, password } = req.body;
    console.log("SIGNUP BODY:", req.body);
    // if either one was not typed send error
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required." });
    }
    // if password not min 8 characters
    if (password.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 characters long." });
    }
    // otherwise try to check if the username is alr taken by searching the database
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username: username }, { email: email }],
      },
    });

    // if username is taken then send error
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or Email already taken." });
    }

    // otherwise hash the password the user wants
    const hashedPassword = await bcrypt.hash(password, 10);

    // create the user using the hashed password and the proposed username
    const newUser = await prisma.user.create({
      data: { username, email, name, passwordHash: hashedPassword },
    });

        const accessToken = generateToken(newUser);
        const refreshToken = generateRefreshToken(newUser);
        res.cookie("accessToken", accessToken, {
            // this means that it cannot be accessed using javascript
            httpOnly: true,      
            // allows http
            secure: true,     
            // you MUST be on the website to get a token
            // other websites cannot make requests
            sameSite: "None",   
            // lifetime of the cookie in milliseconds
            maxAge: 1 * 60 * 60 * 1000 
        });

        res.cookie("refreshToken", refreshToken, {
            // this means that it cannot be accessed using javascript
            httpOnly: true,      
            // allows http
            secure: true,     
            // you MUST be on the website to get a token
            // other websites cannot make requests
            sameSite: "None",   
            // 2 days!!! 
            // lifetime of the cookie in milliseconds
            maxAge: 2 * 24 * 60 * 60 * 1000 
        });

        res.status(201).json({ user: { userId: newUser.userId, username: newUser.username }, accessToken, message: "User created successfully!" });
    }
    catch(error) {
        console.error(error)
        res.status(500).json({ message: "Something went wrong during sign up!" });
    }
    

}

//login
exports.login = async (req, res) => {
  console.log("LOGIN BODY:", req.body);
  const { username, password } = req.body;

  // if either one was not typed send error
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  // try to find a username that matches aka see if user exists
  const user = await prisma.user.findUnique({
    where: { username },
  });
  // if user doesnt exist then show this error
  if (!user) {
    return res.status(400).json({ error: "Invalid username or password." });
  }
  // if there is a user with that username then compare the password with the hashed password that is stored using bcrypt
  const isValidPassword = await bcrypt.compare(password, user.passwordHash);
  // if it doesnt match send error
  if (!isValidPassword) {
    return res.status(400).json({ error: "Invalid username or password." });
  }

    const accessToken = generateToken(user);
    const refreshToken = generateRefreshToken(user);
    res.cookie("accessToken", accessToken, {
        // this means that it cannot be accessed using javascript
        httpOnly: true,      
         // allows http
        secure: true,     
        // you MUST be on the website to get a token
        // other websites cannot make requests
        sameSite: "None",   
        // lifetime of the cookie in milliseconds
        maxAge: 1 * 60 * 60 * 1000 
    });

    res.cookie("refreshToken", refreshToken, {
        // this means that it cannot be accessed using javascript
        httpOnly: true,      
         // allows http
        secure: true,     
        // you MUST be on the website to get a token
        // other websites cannot make requests
        sameSite: "None",   
        // 2 days!!! 
        // lifetime of the cookie in milliseconds
        maxAge: 2 * 24 * 60 * 60 * 1000 
    });

  res.json({
    user: { userId: user.userId, username: user.username },
    accessToken,
    message: "Login successful!",
  });

  // res.redirect('/dashboard');
};

exports.logout = async (req, res) => {
  // this is me MANUALLY checking if the token exsits technically authenticate token does it alr in the routes
  // const authHeader = req.headers['authorization'];
  // const token = authHeader && authHeader.split(' ')[1];

  // if (!token) {
  //     return res.status(400).json({ error: "No token provided." });
  // }

    // need to undo the token
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "None"
    });
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "None"
    });

  res.json({ message: "Logged out successfully." });
};

exports.refresh = (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) {
    return res.status(401).json({ error: "No refresh token" });
  }

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid refresh token" });
    }

    const newAccessToken = generateToken(user);
    res.json({ accessToken: newAccessToken });
  });
};

exports.requestResetPassword = async (req, res) => {
  console.log("Received reset request", req.body);
  const { email } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(404).json({ error: "No user found with that email" });
  }

  //create a random reset token
  const resetToken = crypto.randomBytes(32).toString("hex");
  // 15 minutes from now it will expire
  const tokenExpiry = new Date(Date.now() + 900000);

  await prisma.user.update({
    where: { email },
    data: {
      passwordResetToken: resetToken,
      passwordResetTokenExpiry: tokenExpiry,
    },
  });

    // link that will be sent to the user’s email.
    // points to the front end reset password form
    const frontendUrl = process.env.FRONTEND_URL
    const resetLink = `${frontendUrl}/reset-password?token=${resetToken}`;

    // Send the email and its content
    const mailOptions = {
        from: '"Codifica Support" <support@codifica.it.com>', // sender address
        to: email,
        subject: "Reset your Codifica password securely",
        html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; padding: 20px;">
        <h2 style="color: #4f46e5;">Codifica Password Reset</h2>
        <p>Hi there,</p>
        <p>We received a request to reset your password for your Codifica account.</p>
        <p>To reset your password, please click the button below. This link is valid for 15 minutes:</p>
        <p>
            <a href="${resetLink}" style="display: inline-block; background-color: #4f46e5; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
            Reset Password
            </a>
        </p>
        <p>Or copy and paste this link into your browser:</p>
        <p style="word-break: break-all;">${resetLink}</p>
        <p>If you didn’t request a password reset, please ignore this email. Your password will remain unchanged.</p>
        'h:List-Unsubscribe': '<mailto:unsubscribe@codifica.it.com?subject=unsubscribe>'
        <hr style="margin: 30px 0;" />
        <p style="font-size: 12px; color: #999;">This message was sent from Codifica. If you have any questions, reply to this email. Please pls pls dont send to spam i am making a project and sending them to myself pls </p>
        </div>
        `,
  };

    try {
        const data = await mg.messages.create(process.env.MAILGUN_DOMAIN, mailOptions);
        console.log("Mailgun response:", data);
        res.json({ message: "Reset link sent. It will expire in 15 minutes." });
    } catch (error) {
        console.error("Error sending reset email:", error);
        res.status(500).json({ error: "Failed to send reset email." });
    }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    console.log("Reset request received:", { token, newPassword });

    if (!token || !newPassword) {
      return res
        .status(400)
        .json({ error: "Token and new password are required." });
    }

    // Find user with this reset token and valid expiry
    const user = await prisma.user.findFirst({
      where: {
        passwordResetToken: token,
        //not expired
        passwordResetTokenExpiry: { gt: new Date() },
      },
    });

    console.log("User found for reset:", user);

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired reset token." });
    }

    if (newPassword.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 characters long." });
    }

    // Hash new password and update user
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { userId: user.userId },
      data: {
        passwordHash: hashedPassword,
        passwordResetToken: null,
        passwordResetTokenExpiry: null,
      },
    });

    res.json({ message: "Password reset successful." });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    res
      .status(500)
      .json({ error: "Something went wrong during password reset." });
  }
};

exports.me = async (req, res) => {
  //   const user = req.user;
  //   res.json({ user });

  try {
    const userId = req.user.userId;

    const user = await prisma.user.findUnique({
      where: { userId },
      select: {
        userId: true,
        username: true,
        email: true,
        name: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error("Error fetchning user data: ", error);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
};
