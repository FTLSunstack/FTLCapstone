require('dotenv').config()
const prisma = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

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
    return jwt.sign(
        { id: user.id, username: user.username},
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "2d" }
    );
}

// sign up
// -> /auth/signup
exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        // if either one was not typed send error
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required." });
        }
        // if password not min 8 characters
        if (password.length < 8) {
            return res.status(400).json({ error: "Password must be at least 8 characters long." });
        }
        // otherwise try to check if the username is alr taken by searching the database
        const existingUser = await prisma.user.findUnique({
            where: { username }
        });

        // if username is taken then send error
        if (existingUser) {
            return res.status(400).json({ error: "Username already taken." });
        }

        // otherwise hash the password the user wants
        const hashedPassword = await bcrypt.hash(password, 10);

        // create the user using the hashed password and the proposed username
        const newUser = await prisma.user.create({
            data: { username, passwordHash: hashedPassword }
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
    if (!username || !password) {
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
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(400).json({ error: "No token provided." });
    }


    // need to refresh the token
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


exports.me = async (req, res) => {
    const user = req.user; // SET from middleware
    res.json({ user });
};