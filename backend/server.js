import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import ideaRouter from "./routes/ideaRoutes.js";

dotenv.config({debug:true});

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('combined'))

app.use('/api', ideaRouter);

app.get("/", (req, res) => {
  res.send("Express + Prisma + Neon PostgreSQL running!".bgBlue);
});

const PORT = process.env.PORT

if(process.env.NODE_ENV!=='production'){
  app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
}

export default app
