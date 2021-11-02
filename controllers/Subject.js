const ErrorHandler=require('express-async-handler');
const Subject=require('../models/Subject');

//create a subject
exports.createSubject=ErrorHandler(async(req,res)=>{
    const{name}=req.body;
    console.log(name);
    const subject=await Subject.create({name});
    res.status(201).json({
        message:'subject created successfully',
        data:subject
    });
})
