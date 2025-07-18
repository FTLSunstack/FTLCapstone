require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");
require("./passport");

const app = express();
const PORT = 3000;

const corsOption = {
  origin: "http://localhost:5173",
  credentials:true
};

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors(corsOption));

const authRouter = require("./routes/authRoutes");
const JudgeRoutes = require("./routes/JudgeRoute");
app.use("/auth", authRouter);

app.use("/api", JudgeRoutes);

app.get("/", (req, res) => {
  res.send("This is Codifica!");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
