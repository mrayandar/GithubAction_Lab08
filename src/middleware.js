const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const users = [];

const register = (req, res) => {
  const { username, password } = req.body;
  if (users.find((user) => user.username === username))
    return res.status(400).json({ error: "User exists" });

  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: "User registered" });
};

const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || !bcrypt.compareSync(password, user.password))
    return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ username }, "secretkey", { expiresIn: "1h" });
  res.json({ token });
};

module.exports = { register, login };
