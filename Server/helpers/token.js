import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config({path:"../.env"});
//encode token playload {} hold many data
export const generateAuthToken=(payload=>{
    const token=jwt.sign({payload},
    process.env.SECRET_KEY,{expiresIn:"1d"})
    return token
});
//decode token token () string
export const dataFromToken=(token=>{
    const data=jwt.verify(token,
    process.env.SECRET_KEY)
    return data
});