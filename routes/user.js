const express=require("express")
const User=require("../models/user")
const router=express.Router()
const bcrypt=require("bcrypt")
var jwt = require('jsonwebtoken');
const isAuth=require("../middleweare/isAuth")
//register new user

router.post("/register",async(req,res)=>{
    const{name,email,lastName,password}=req.body
    let user=await User.findOne({email})
    if(user){
       return res.send({msg:"user already exists !"})
    }
user=new User({
    name,email,password,lastName
})
const salt=10
let hashedPassword= await bcrypt.hash(password,salt)
user.password=hashedPassword
 await user.save()

const payload={
    id:user._id
}
 var token = jwt.sign(payload, 'jhghsd');



 res.send({msg:"user added with success !",user,token})

})

//login
router.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try{
    let user=await User.findOne({email})
    if(!user){
     return    res.send({msg:"user not found !"})
    }
    let isMatch= await bcrypt.compare(password,user.password)

if(!isMatch){
   return  res.send({msg:"Bad credentials !  password"})
}
const payload={
    id:user._id
}
 var token = jwt.sign(payload, 'jhghsd',{ expiresIn: '1h' });


res.send({msg:"user logged with success !",user,token})

    }
    catch(error){
        res.send({msg:"Server error"})
    }

})

//get auth user
router.get("/user",isAuth,(req,res)=>{
    res.send({user:req.user})
})



module.exports=router