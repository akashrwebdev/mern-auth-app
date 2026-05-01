import { Router } from "express";
import * as authCountroller from "../controllers/user.controllers.js";

const authRouter = Router();

authRouter.post("/register", authCountroller.register);

export default authRouter;
