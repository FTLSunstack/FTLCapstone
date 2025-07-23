require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");
require("./passport");

const app = express();
const PORT = process.env.PORT || 3000;

const corsOption = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors(corsOption));

const authRouter = require("./routes/authRoutes");
const JudgeRoutes = require("./routes/JudgeRoute");
const geminiRoutes = require("./routes/geminiRoutes");

app.use("/auth", authRouter);
app.use("/api", JudgeRoutes);
app.use("/explainer", geminiRoutes);

app.get("/", (req, res) => {
  res.send("This is Codifica!");
});

const testRoutes = require("./routes/test-routes");
app.use("/test", testRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

const glossaryRoutes = require("./routes/glossaryRoutes");
app.use("/glossary", glossaryRoutes);
