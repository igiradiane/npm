import express from 'express';

import AuthRoute from'../Controller/Auth.js';
const Auth =express.Auth();

Auth.post("/register",Auth.Auth.AuthRoute);
export default Auth;
