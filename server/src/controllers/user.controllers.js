import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const isAlreadyRegister = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (isAlreadyRegister) {
    return res.status(409).json({ message: "Username or Email already exist" });
  }

  const saltRounds = 10;

  const hashPassword = await bcrypt.hash(password, saltRounds);

  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    config.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  res.status(201).json({
    message: "Usersss register successfully",
    user: {
      username: user.username,
      email: user.email,
    },
    token,
  });
};
