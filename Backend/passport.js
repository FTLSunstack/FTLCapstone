const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const prisma = require("./db");
const jwt = require("jsonwebtoken");

passport.use(new GoogleStrategy({
    // basically this is our codifica google project 
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    },
    async (googleAccessToken, googleRefreshToken, profile, done) => {
    try {
        // find user using google profile/email
        let user = await prisma.user.findUnique({ where: { email: profile.emails[0].value } });
        
        //if they dont exist create them
        if (!user) {
        user = await prisma.user.create({
            data: {
            email: profile.emails[0].value,
            username: profile.displayName, // or some default
            }
        });
        }

    return done(null, user);
    } catch (err) {
        return done(err, null);
    }
}));
