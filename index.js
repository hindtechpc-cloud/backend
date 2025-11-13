import express from "express";
import { users } from "./user.js";
import cors from "cors"
import bodyParser from "body-parser";
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());//allowe domain
app.use(bodyParser.urlencoded({ extended: true }));

const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

app.get("/result", (req, res) => {
  return res.json({ result: result });
});

// post method
app.post("/send", (req, res) => {
  // console.log(req.body);
  const { num } = req.body;
  result.push(num);
  return res.json(result);
});

const user = {
  name: "Raj",
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

// add user api

app.post("/api/add-user", (req, res) => {
  users.push({ ...req.body, id: users.length + 1 });
  // if(user)
  return res.status(201).json({
    message: "user added successfully",
    users,
  });
});

// get users
app.get("/api/get-user", (req, res) => {
  if (users.length <= 0) {
    return res.json({
      message: "user not found",
    });
  }
  return res.json({
    message: "user found successfully",
    users,
  });
});

// update  user
app.put("/api/:id/update-user", (req, res) => {
  const { id } = req.params;
  const { name, salary, email, role, address, image } = req.body;

  const newUser = users.filter((user) => user.id == id);
// [{}]
  if (newUser.length <= 0) {
    return res.json({
      message: "user not found",
    });
  }

  newUser[0].name = name || newUser[0].name;
  newUser[0].email = email || newUser[0].email;
  newUser[0].role = role || newUser[0].role;
  newUser[0].salary = salary || newUser[0].salary;
  newUser[0].address = address || newUser[0];
  newUser[0].image = image || newUser[0].image;

  return res.json({
    message: "user updated successfully",
    users,
  });
});

// delete user
app.delete("/api/delete-user/:id", (req, res) => {
  const { id } = req.params;
  const newUsers = users.filter((user) => user.id != id);
  if (newUsers.length <= 0) {
    return res.json({
      message: "user not found",
    });
  }
  return res.json({
    message: "user deleted successfully ",
    users: newUsers,
  });
});



app.listen(port, () => {
  console.log(`server is running on port : http://localhost:${port}`);
});
