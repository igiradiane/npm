import express from "express";
import dotenv from "dotenv";
import bodyParse from "body-parser";
import router from "./Server/Route/AuthoRoute.js";
import route from "./Server/Route/BlogRoute.js";
///import Auth from "./Server/Route/AuthRoute.js";
import jwt from "jsonwebtoken";

dotenv.config({path:"./.env"});

const app=express();
app.use(bodyParse.json());
app.use('/api/v1/blogpost', router)
app.use('/api/v1/blog', route)
//app.use('/api/v1/bl', Auth)

   // app.use('/signin',(req,res)=>{
      //  res.status(200).send({
          //  status:200,
          //  message:"this is sign Api"
       // }) })
        app.use('/',(req,res)=>{
            res.status(200).send({
                status:200,
                message:"this is Blogpost Api"
            })
})
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is on...${port}`)
})
//app.listen(9090,()=>{
   /// console.log("server is on...")
//})
export default app;

