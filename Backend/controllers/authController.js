require('dotenv').config()
const prisma = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const crypto = require("crypto");
const transporter = require("../nodemailer");



// create the jwt token
const generateToken = (user) => {
    return jwt.sign(
        // only give these fiels
        { id: user.id, username: user.username }, 
        process.env.ACCESS_TOKEN_SECRET, 
        { expiresIn: "1h" }
    );
}; 
function generateRefreshToken(user) {
    //  frontend can ask for a new access token without the user logging in again
    return jwt.sign(
        { id: user.id, username: user.username},
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

    res.redirect(`http://localhost:3000?accessToken=${accessToken}`);
};

// sign up
// -> /auth/signup
exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // if either one was not typed send error
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required." });
        }
        // if password not min 8 characters
        if (password.length < 8) {
            return res.status(400).json({ error: "Password must be at least 8 characters long." });
        }
        // otherwise try to check if the username is alr taken by searching the database
        const existingUser = await prisma.user.findFirst({
            where: { 
                OR: [
                    {username:username},
                    {email:email}
                ]
            }
        });


        // if username is taken then send error
        if (existingUser) {
            return res.status(400).json({ error: "Username or Email already taken." });
        }

        // otherwise hash the password the user wants
        const hashedPassword = await bcrypt.hash(password, 10);

        // create the user using the hashed password and the proposed username
        const newUser = await prisma.user.create({
            data: { username, email, passwordHash: hashedPassword }
        });

        const token = generateToken(newUser);

        res.status(201).json({ user: { id: newUser.id, username: newUser.username }, token, message: "User created successfully!" });
    }
    catch(error) {
        console.error(error)
        res.status(500).json({ message: "Something went wrong during sign up!" });
    }
    

}

//login
exports.login = async (req,res) => {
    const { username, password } = req.body;

    // if either one was not typed send error
    if (!username || !email || !password) {
        return res.status(400).json({ error: "Username and password are required." });
    }

    // try to find a username that matches aka see if user exists
    const user = await prisma.user.findUnique({
        where: { username }
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

    res.cookie("refreshToken", refreshToken, {
        // this means that it cannot be accessed using javascript
        httpOnly: true,      
         // allows http
        secure: false,     
        // you MUST be on the website to get a token
        // other websites cannot make requests
        sameSite: "Strict",   
        // 2 days!!! 
        // lifetime of the cookie in milliseconds
        maxAge: 2 * 24 * 60 * 60 * 1000 
    });

    res.json({user: { id: user.id, username: user.username }, accessToken, message: "Login successful!" });

    

    // res.redirect('/dashboard');

}

exports.logout = async (req,res) =>{
    // this is me MANUALLY checking if the token exsits technically authenticate token does it alr in the routes
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1];

    // if (!token) {
    //     return res.status(400).json({ error: "No token provided." });
    // }

    // need to undo the token
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: false,
        sameSite: "Strict"
    });

    res.json({ message: "Logged out successfully." });
}

exports.refresh = (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) {
        return res.status(401).json({ error: "No refresh token" })
    };

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
        return res.status(403).json({ error: "Invalid refresh token" })
    };

    const newAccessToken = generateToken(user);
    res.json({ accessToken: newAccessToken });
    });
};

exports.requestResetPassword = async (req, res) => {
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
    const resetLink = `http://localhost:3000/auth/reset-password?token=${resetToken}`;

    // Send the email and its content
    const mailOptions = {
        from: '"Codifica Support" <codificaftl@gmail.com>', // sender address
        to: email,
        subject: "Password Reset Request",
        html: `
        <p>You requested a password reset.</p>
        <p>Click this link to reset your password. The link is valid for 15 minutes:</p>
        <a href="${resetLink}">${resetLink}</a>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "Reset link sent. It will expire in 15 minutes." });
    } catch (error) {
        console.error("Error sending reset email:", error);
        res.status(500).json({ error: "Failed to send reset email." });
    }
};


exports.resetPassword = async (req, res) => {
    exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
        return res.status(400).json({ error: "Token and new password are required." });
    }

    // Find user with this reset token and valid expiry
    const user = await prisma.user.findFirst({
        where: {
        passwordResetToken: token,
        passwordResetTokenExpiry: { gt: new Date() }, // expiry in future
        },
    });

    if (!user) {
        return res.status(400).json({ error: "Invalid or expired reset token." });
    }

    if (newPassword.length < 8) {
        return res.status(400).json({ error: "Password must be at least 8 characters long." });
    }

    // Hash new password and update user
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
        where: { id: user.id },
        data: {
        passwordHash: hashedPassword,
        passwordResetToken: null,
        passwordResetTokenExpiry: null,
        },
    });

    res.json({ message: "Password reset successful." });
    };

}



exports.me = async (req, res) => {
    const user = req.user;
    res.json({ user });
};