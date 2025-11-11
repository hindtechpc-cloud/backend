import express from "express";

const app = express();
const port = 5000;
app.use(express.json());

const result = [1, 2, 3,4, 5, 6, 7, 8, 9, 10];

app.get("/result", (req, res) => {
  return res.json({ result: result });
});

// post method 
app.post("/send",(req,res)=>{
    console.log(req.body);
    const {num}=req.body;
    result.push(num);
    return res.json(result);
})

const user = {
  name: "Arvind",
  role: "mern dev",
  email: "fjh@gmil.com",
  salary:"",
  image:"",
  address:""
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
