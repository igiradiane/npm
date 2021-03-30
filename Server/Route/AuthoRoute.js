import express from 'express';
import UserController from'../Controller/AuthController.js';
//import User from'../Controller/Auth.js';
//import Auth from'../Controller/Auth.js';
const router =express.Router();
router.post("/auth/signup",UserController.UserController.signup);

router.post("/auth/signin",UserController.UserController.signin);

//router.post("/register",Auth.register);
export default router;