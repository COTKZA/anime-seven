const User = require("../../../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  try {
    const { username, email, password_hash } = req.body;

    if (!password_hash || password_hash.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must bg at least 8 characters long." });
    }

    const hashedPassword = await bcrypt.hash(password_hash, 10);

    await User.create({
      username: username,
      email: email,
      password_hash: hashedPassword,
    });

    res.status(201).json({ message: "Account registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password_hash } = req.body;

    if (!email || !password_hash) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValidate = await bcrypt.compare(
      password_hash,
      user.password_hash
    );

    if (!isPasswordValidate) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};