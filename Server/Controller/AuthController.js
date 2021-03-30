import bcrypt from "bcrypt";
import UserData from '../Model/UserModel.js';
import {generateAuthToken} from "../helpers/token.js";

const users=[];

class UserController{
static signup=(req,res)=>{
    const id=users.length +1;
    let{
        firstName,
        lastname,
        email,
        password,
        gender,
        jobRole,
        department,
        address
    } = req.body;
   password=bcrypt.hashSync(password,10)
    const IsEmailExist= users.find(user=> user.email===req.body.email);
    if(IsEmailExist){
        return res.status(409).send({statu:409, error:"dublicate"})
    }
    const user =new UserData(id,firstName,lastname,email,password,gender,jobRole,department,address);
    //const user =new UserData(id,req.body);
    users.push(user);
    const data =users.find(u=>(u.email===email));
    if(!data){
return res.status(417).json({
    status:417,
    message:" Signup failed",
    data
})
    }
    else{
let {password, ...dataWithoutPassword}=data;
   
    return res.status(201).json({
        status:201,
        message:"Account created successfully",
        data:dataWithoutPassword
    }) 
}   
};
//

static signin=(req,res)=>{
    
    let {
        email,
        password
    } = req.body;

    
    const IsUserExit= users.find(user=> user.email===email);

//if(IsUserExit && IsUserExit.password===password)
if(IsUserExit && bcrypt.compareSync(password,IsUserExit.password))
{
    const data = IsUserExit;
const token=generateAuthToken({id:data.id,email:data.email,jobRole:data.jobRole});
let {password, ...dataWithoutPassword}=data;
    return res.status(201).json({statu:201,
         message:" signin successfully",
          data:dataWithoutPassword,
        token:token})
}
return res.status(404).json({statu:404,
     message:" invalid"})
}

}


export default {UserController,users};
