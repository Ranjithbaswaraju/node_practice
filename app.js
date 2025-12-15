const express = require("express");
const { sendMail } = require("./utils");

const app = express();
const port = 3000;

/* 👉 Body parser middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/sendMail", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "email not found" });
    }

    await sendMail(email);
    res.status(200).json({ emailId: email, message: "Mail sent successfully" });

  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
