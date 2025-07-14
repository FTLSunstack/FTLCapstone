const express = require("express");
require('dotenv').config()
const router = express.Router();
const controller = require("../controllers/authController");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");

const authenticateToken= (req, res, next) => {
    const authHeader =req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token==null) {
        return res.status(401).json({ error: "Access denied. No token provided." })
    }

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user) => {
        if(err){
            return res.status(403).json({ error: "Invalid or expired token." });
        }
        else {
            req.user =user
            next()
        }
    })
}

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login attempts per windowMs
    message: { error: "Too many failed login attempts. Try again later." },
});


router.post("/signup", controller.signup);
router.post("/login", loginLimiter,  controller.login);
router.post("/logout", controller.logout);
router.post("/refresh", controller.refresh);

router.get("/me", authenticateToken, controller.me);


module.exports = router;