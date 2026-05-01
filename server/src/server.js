import app from "../src/app.js";
import config from "./config/config.js";
import connectDB from "./db/db.js";

const port = config.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
