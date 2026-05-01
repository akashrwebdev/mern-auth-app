import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";

const app = express();

// basic middelware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// cors configurataion
app.use(cors());

app.use("/api/auth", authRouter);

export default app;
