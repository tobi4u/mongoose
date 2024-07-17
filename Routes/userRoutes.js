import express from "express";
import { createUser, getAllUsers, userLogin } from "../controllers/userController.js";
import { verifyJWtoken } from "../middlewares/jwtAuth.js";


const router = express.Router();

router.post("/register", createUser); // this is the route for the registration

router.post("/signIn", userLogin); // this is the route for the login

router.get("/all",verifyJWtoken, getAllUsers); // this is the route for getting all users  from the database

export default router;


 
 