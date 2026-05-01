import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined In the environment variable");
}

const config = {
    PORT : process.env.PORT,
    MONGO_URI:process.env.MONGO_URI
}

export default config;
