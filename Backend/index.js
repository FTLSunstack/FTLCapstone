const express = require('express');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/authRoutes");
app.use("/auth", authRouter);

app.get('/', (req, res) => {
  res.send('This is Codifica!')
})

app.use(cors({
  // front end port
  origin: 'http://localhost:5173',
  // this allows the cookies to be sent/used
  credentials: true
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})