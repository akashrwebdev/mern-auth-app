import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";

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

  res.status(201).json({
    message: "Usersss register successfully",
    user: {
      username: user.username,
      email: user.email,
    },
  });
};
