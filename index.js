import express from "express";
import dotenv from "dotenv";
import dbConnection from "./db/conn.js";
import userRouter from "./Routes/userRoutes.js";

dotenv.config();

await dbConnection();
const app = express();
const PORT = 2003;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

app.use("/api/v1/user", userRouter)