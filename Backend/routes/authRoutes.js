const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
require('dotenv').config()
const router = express.Router();
const controller = require("../controllers/authController");

const authenticateToken= (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).send('No token found');
    }

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user) => {
        if(err){
            return res.status(403).json({ error: "Invalid or expired token." });
        }
        else {
            req.user=user
            next();
        }
    })
}

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login attempts per windowMs
    message: { error: "Too many failed login attempts. Try again later." },
});

// this route calls passport.js and takes you to the google sign in page
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));


// this route is google coming back from their own stuff and into our own server
router.get("/google/callback", 
    passport.authenticate("google", { session: false }), 
    controller.googleCallback
);

// -> /auth/signup
router.post("/signup", controller.signup);
// -> /auth/login
router.post("/login", loginLimiter,  controller.login);
// -> /auth/logout
router.post("/logout", authenticateToken, controller.logout);
// -> /auth/refresh
router.post("/refresh", controller.refresh);
// -> /auth/req-reset-password
router.post("/req-reset-password", controller.requestResetPassword);
// -> /auth/reset-password
router.post("/reset-password", controller.resetPassword);

//this returns info about the user only if they are authenticated
router.get("/me", authenticateToken, controller.me);


module.exports = router;