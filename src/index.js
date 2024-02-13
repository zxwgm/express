import express from "express";
const app = express();

const PORT = 8080;

app.get("/", (req, res)=> {
  res.send("hi222");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));