import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Meu primeiro servidor, yay!");
});

app.listen(5000);
