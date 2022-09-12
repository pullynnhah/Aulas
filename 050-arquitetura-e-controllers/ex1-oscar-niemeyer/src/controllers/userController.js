import db from "../database/db.js";

const deleteUser = async (req, res) => {
  const {authorization} = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  const session = await db.collection("sessions").findOne({token});
  if (!session) {
    return res.sendStatus(401);
  }

  const user = await db.collection("users").findOne({_id: session.userId});
  if (!user) {
    return res.sendStatus(401);
  }

  await db.collection("users").deleteOne({_id: session.userId});

  res.sendStatus(200);
};

const editUser = async (req, res) => {
  const newUser = req.body;
  const {authorization} = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  const session = await db.collection("sessions").findOne({token});
  if (!session) {
    return res.sendStatus(401);
  }

  const user = await db.collection("users").findOne({_id: session.userId});
  if (!user) {
    return res.sendStatus(401);
  }

  await db.collection("users").updateOne(
    {
      _id: session.userId,
    },
    {
      $set: newUser,
    }
  );

  res.sendStatus(200);
};

const getUser = async (req, res) => {
  const {authorization} = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  const session = await db.collection("sessions").findOne({token});
  if (!session) {
    return res.sendStatus(401);
  }

  const user = await db.collection("users").findOne({_id: session.userId});
  if (!user) {
    return res.sendStatus(401);
  }

  delete user.password;

  res.send(user);
};

export {getUser, editUser, deleteUser};
