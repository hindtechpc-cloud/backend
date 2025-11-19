import express from "express";
import { users } from "./user.js";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import { userRouter } from "./routes/userRoutes.js";
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();
app.use("/api",userRouter);

const user = {
  name: "Arvind",
  role: "laravel dev",
  email: "raj@gmil.com",
  salary: "84732",
  image: "djfhe",
  address: "lucknow",
};
app.get("/user", (req, res) => {
  return res.json({
    user: user,
  });
});
// health api
app.get("/health", (req, res) => {
  return res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`server is running on port : http://localhost:${port}`);
});
