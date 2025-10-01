import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan())
app.get("/", (req, res) => {
  res.send("Express + Prisma + Neon PostgreSQL running!".bgBlue);
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
