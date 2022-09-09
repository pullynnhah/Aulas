import {v4 as uuid} from "uuid";
import express from "express";
import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect(() => {
  db = mongoClient.db("cadastra-ai-v2");
});

const app = express();
app.use(express.json());

app.post("/sign-up", async (req, res) => {
  //name, email, password
  const user = req.body;

  const passwordHash = bcrypt.hashSync(user.password, 10);

  await db.collection("users").insertOne({...user, password: passwordHash});

  res.sendStatus(201);
});

app.post("/sign-in", async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await db.collection("users").findOne({email});

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = uuid();
      await db.collection("sessions").insertOne({token, userId: user._id});
      res.send(token);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get("/meus-dados", async (req, res) => {
  const {authorization} = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    res.sendStatus(401);
    return;
  }

  try {
    const session = await db.collection("sessions").findOne({token});

    if (!session) {
      res.sendStatus(401);
      return;
    }

    const user = await db.collection("users").findOne({_id: session.userId});

    if (!user) {
      res.sendStatus(401);
      return;
    }

    delete user.password;

    res.send(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000.");
});
