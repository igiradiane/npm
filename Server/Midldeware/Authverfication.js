import {dataFromToken} from "../helpers/token.js";
import UsersContollers from "../Controller/AuthController.js";

export const verifyAut=(req,res,next)=>{
    const token =req.header("x-auth-token");
    if(!token){
        return res.status(404).json({
            status:404,
            message:" no token provided"
            
        })
    }


   // const user=dataFromToken(token).payload;
    //const users=UsersContollers.users
    //const data= users.find(u=u.email=user.email)
    //if(!data){
       // return res.status(404).json({
        //    status:404,
      //      message:"no token provided"
    //  //  });
//}
try{
    const user = dataFromToken(token).payload;
    const users=UsersContollers.users;
    const data = users.find(u=> u.email===user.email);
    if(!data){
        res.status(404).json({
            status:404,
            message:"not user"
        })
    
}
req.body.userId=data.id;

return next();

}catch(e){
    res.status(404).json({
        status: 404,
        message:"invalid"
    });
}
}
