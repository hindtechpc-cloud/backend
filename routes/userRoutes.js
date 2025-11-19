import express from "express";
import {
  addUser,
  addUserToMongo,
  deleteUser,
  deleteUserToMongo,
  getUsers,
  MongoData,
  updateUser,
  updateUserToMongo,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/get-users", getUsers);
router.get("/get-mongo-date", MongoData);
router.post("/add-user", addUser);
router.post("/add-user-to-mongo", addUserToMongo);
router.put("/:id/update-user", updateUser);
router.put("/:id/update-user-to-mongo", updateUserToMongo);
router.delete("/delete-user/:id", deleteUser);
router.delete("/delete-user-to-mongo/:id", deleteUserToMongo);

export const userRouter = router;
