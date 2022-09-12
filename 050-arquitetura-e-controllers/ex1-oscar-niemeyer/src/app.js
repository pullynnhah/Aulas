import express from "express";

import {deleteUser, editUser, getUser} from "./controllers/userController.js";
import {signIn, signUp} from "./controllers/authController.js";

const app = express();
app.use(express.json());

app.post("/sign-up", signUp);

app.post("/sign-in", signIn);

app.get("/user", getUser);

app.put("/user", editUser);

app.delete("/user", deleteUser);

app.listen(5000, () => {
  console.log("Server is listening on port 5000.");
});
