import { Router } from "express";
import * as authCountroller from "../controllers/user.controllers.js";

const authRouter = Router();

authRouter.post("/register", authCountroller.register);

authRouter.get("/get-me", authCountroller.getMe);

authRouter.get("/refreshToken", authCountroller.refreshToken);

export default authRouter;
