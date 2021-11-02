const User=require('../models/User');
const ErrorHandler=require('express-async-handler');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

//create User
exports.createUser=ErrorHandler(async(req,res,next)=>{
    const{email,password,usertype}=req.body
   const user=await User.findOne({email})
    if(user){
        return res.status(400).json({error:'User already exists'})
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    const newUser=new User({email,password:hashedPassword,usertype});
    await newUser.save();
    res.status(201).json({message:'User created successfully'})
});

//login User
exports.loginUser=ErrorHandler(async(req,res,next)=>{
    const{email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
        return res.status(400).json({error:'User does not exist'})
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({error:'Invalid Credentials'})
    }
    const token=jwt.sign({_id:user._id,usertype:user.usertype,email:user.email},process.env.ACCESS_TOKEN,{expiresIn:'20m'});
    res.status(200).json({token,usertype:user.usertype,email:user.email})
})

//dashboard
exports.dashboard=ErrorHandler(async(req,res,next)=>{
    user=req.user
    res.status(200).json({message:'Welcome to dashboard',user})
})