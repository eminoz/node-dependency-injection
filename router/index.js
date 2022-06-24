import UserApi from "../api/user.js";
import {User} from "../model/user.js";
import UserRepository from "../repository/user.js";
import UserService from "../service/user.js";
import express from "express";

const UserRepo = new UserRepository(User);
const UserSer = new UserService(UserRepo);
const UserController = new UserApi(UserSer);

const router = express.Router();
router.post("/createuser", UserController.CreateUser);
router.get("/getuserbyid/:id", UserController.GetUserById);
export default router;
