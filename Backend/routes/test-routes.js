const express = require("express");
const router = express.Router();
const transporter = require("../nodemailer");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.post("/send-test-email", async (req, res) => {
  const { to } = req.body;

  if (!to) {
    return res.status(400).json({ error: "Recipient email address is required." });
  }

  const mailOptions = {
    from: '"Codifica Support" <codificaftl@gmail.com>',
    to, // email passed from Postman
    subject: "🧪 Test Email from Codifica",
    html: "<p>If you're seeing this, your email setup works! ✅</p>",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent", info });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email", details: error.message });
  }
});

module.exports = router;
