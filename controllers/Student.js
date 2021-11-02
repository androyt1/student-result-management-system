const ErrorHandler=require('express-async-handler');
const Student=require('../models/Student');
const validator = require("email-validator");
const Subject=require('../models/Subject');


//create a new student
exports.createStudent=ErrorHandler(async(req,res,next)=>{
    const{fname,lname,middlename,username,student_class,student_address,gaurdian_title,gaurdian_fname,gaurdian_lname,gaurdian_phone,gaurdian_email,gaurdian_address,gaurdian_relationship}=req.body;
    
    if(!validator.validate(gaurdian_email)){
        return res.status(400).json({
            error:'invalid email'
        })
    }

    const usernameExist=await Student.findOne({username});
    if(usernameExist){
        return res.status(400).json({
            error:'Username already exists..please try a different username'
        });
    }

    const student=await Student.create({
        fname,middlename, lname, username, student_class, student_address, gaurdian_title, gaurdian_fname, gaurdian_lname, gaurdian_phone, gaurdian_email, gaurdian_address, gaurdian_relationship
    });
   
  
    //first term subjects
    student.subjects.push({name:"Mathematics",firstAssessment:0,secondAssessment:0,thirdAssessment:0,  examScore:0,total:0});
    student.subjects.push({name:"English Language",firstAssessment:0,secondAssessment:0,thirdAssessment:0,  examScore:0,total:0})
    student.subjects.push({name:"Science",firstAssessment:0,secondAssessment:0,thirdAssessment:0,  examScore:0,total:0})
    student.subjects.push({name:"Social Studies",firstAssessment:0,secondAssessment:0,thirdAssessment:0,  examScore:0,total:0})

    //second term subjects
    student.subjects2.push({name:"Mathematics",firstAssessment:0,secondAssessment:0,thirdAssessment:0,  examScore:0,total:0});
    student.subjects2.push({name:"English Language",firstAssessment:0,secondAssessment:0,thirdAssessment:0,  examScore:0,total:0})
    student.subjects2.push({name:"Science",firstAssessment:0,secondAssessment:0,thirdAssessment:0,  examScore:0,total:0})
    student.subjects2.push({name:"Social Studies",firstAssessment:0,secondAssessment:0,thirdAssessment:0,  examScore:0,total:0})

    //third term subjects
    student.subjects3.push({name:"Mathematics",firstAssessment:0,secondAssessment:0,thirdAssessment:0,  examScore:0,total:0});      
    student.subjects3.push({name:"English Language",firstAssessment:0,secondAssessment:0,thirdAssessment:0,  examScore:0,total:0})
    student.subjects3.push({name:"Science",firstAssessment:0,secondAssessment:0,thirdAssessment:0,  examScore:0,total:0})
    student.subjects3.push({name:"Social Studies",firstAssessment:0,secondAssessment:0,thirdAssessment:0,  examScore:0,total:0})

    student.save()

    res.status(201).json({
        success:true,
        student
    });
})

//get all students
exports.getAllStudents=ErrorHandler(async(req,res,next)=>{
    const students=await Student.find();
    res.status(200).json({
        success:true,
        students
    });
})

//find student by id
exports.findStudentById=ErrorHandler(async(req,res)=>{
    const student=await Student.findById(req.params.id).populate("subjects");
    if(!student){
        return res.status(404).json({
            error:'No student found'
        });
    }
    res.status(200).json({
        success:true,
        student
    });
})

//update student scores
exports.updateStudentScores=ErrorHandler(async(req,res)=>{
   // const student=await Student.findById(req.params.id).populate("subjects")

    const{subject_id,first,second,third,exam}=req.body
   const student=await Student.findOneAndUpdate({_id:req.params.id,"subjects._id":subject_id}, {$set: {
        'subjects.$.firstAssessment': first,
        'subjects.$.secondAssessment': second,
        'subjects.$.thirdAssessment': third,
        'subjects.$.examScore': exam       
    }},{new:true})
    //get the sum subject scores in suject array
    const subjects=student.subjects.find(subject=>subject._id==subject_id);
    const maths=subjects.name;
    const firstA=subjects.firstAssessment;
    const secondA=subjects.secondAssessment;
    const thirdA=subjects.thirdAssessment;
    const examA=subjects.examScore;
     const totalScore=firstA + secondA + thirdA + examA;

     if(subjects.name==="Mathematics"){
                student.totalMaths=totalScore                
            }//
            if(subjects.name==="English Language"){
                student.totalEnglish=totalScore
           }
           if(subjects.name==="Science"){
            student.totalScience=totalScore
           }
           if(subjects.name==="Social Studies"){
            student.totalSocialStudies=totalScore
           }
           student.grandtotal=parseInt(student.totalMaths) + parseInt(student.totalEnglish) + parseInt(student.totalScience) + parseInt(student.totalSocialStudies)
           student.average=student.grandtotal/4
           student.save()
     //set up grade
     let grade;
        if(totalScore>=80 && totalScore<=100){
             grade="A";
        }else if(totalScore>=70 && totalScore<=79){
             grade="B";      
        }else if(totalScore>=60 && totalScore<=69){
             grade="C";       
        }else if(totalScore>=50 && totalScore<=59){
             grade="D";      
        }else if(totalScore>=40 && totalScore<=49){
             grade="E";      
        }else if(totalScore>=0 && totalScore<=39){
             grade="F";
        }
     console.log(`total score for ${maths} is ${totalScore} and grade ${grade}`);  

    await Student.findOneAndUpdate({_id:req.params.id,"subjects._id":subject_id}, {$set: {      
        'subjects.$.total': totalScore ,
        'subjects.$.grade': grade         
    }},{new:true})
   res.json({message:"Student score updated"}) 
}) 




//update student second term scores
exports.updateStudentScores2=ErrorHandler(async(req,res)=>{
    // const student=await Student.findById(req.params.id).populate("subjects")
 
     const{subject_id,first,second,third,exam}=req.body
    const student=await Student.findOneAndUpdate({_id:req.params.id,"subjects2._id":subject_id}, {$set: {
         'subjects2.$.firstAssessment': first,
         'subjects2.$.secondAssessment': second,
         'subjects2.$.thirdAssessment': third,
         'subjects2.$.examScore': exam       
     }},{new:true})
     //get the sum subject scores in suject array
     const subjects=student.subjects2.find(subject=>subject._id==subject_id);
     const maths=subjects.name;
     const firstA=subjects.firstAssessment;
     const secondA=subjects.secondAssessment;
     const thirdA=subjects.thirdAssessment;
     const examA=subjects.examScore;
      const totalScore=firstA + secondA + thirdA + examA;
 
      if(subjects.name==="Mathematics"){
                 student.totalMaths2=totalScore                
             }//
             if(subjects.name==="English Language"){
                 student.totalEnglish2=totalScore
            }
            if(subjects.name==="Science"){
             student.totalScience2=totalScore
            }
            if(subjects.name==="Social Studies"){
             student.totalSocialStudies2=totalScore
            }
            student.grandtotal2=parseInt(student.totalMaths2) + parseInt(student.totalEnglish2) + parseInt(student.totalScience2) + parseInt(student.totalSocialStudies2)
            student.average2=student.grandtotal2/4
            student.save()
      //set up grade
      let grade;
         if(totalScore>=80 && totalScore<=100){
              grade="A";
         }else if(totalScore>=70 && totalScore<=79){
              grade="B";      
         }else if(totalScore>=60 && totalScore<=69){
              grade="C";       
         }else if(totalScore>=50 && totalScore<=59){
              grade="D";      
         }else if(totalScore>=40 && totalScore<=49){
              grade="E";      
         }else if(totalScore>=0 && totalScore<=39){
              grade="F";
         }
      console.log(`total score for Second term ${maths} is ${totalScore} and grade ${grade}`);  
 
     await Student.findOneAndUpdate({_id:req.params.id,"subjects2._id":subject_id}, {$set: {      
         'subjects2.$.total': totalScore ,
         'subjects2.$.grade': grade         
     }},{new:true})
    res.json({message:"Student second term scores updated"}) 
 }) 
 
 


 //update student third term scores
exports.updateStudentScores3=ErrorHandler(async(req,res)=>{
    // const student=await Student.findById(req.params.id).populate("subjects")
 
     const{subject_id,first,second,third,exam}=req.body
    const student=await Student.findOneAndUpdate({_id:req.params.id,"subjects3._id":subject_id}, {$set: {
         'subjects3.$.firstAssessment': first,
         'subjects3.$.secondAssessment': second,
         'subjects3.$.thirdAssessment': third,
         'subjects3.$.examScore': exam       
     }},{new:true})
     //get the sum subject scores in suject array
     const subjects=student.subjects3.find(subject=>subject._id==subject_id);
     const maths=subjects.name;
     const firstA=subjects.firstAssessment;
     const secondA=subjects.secondAssessment;
     const thirdA=subjects.thirdAssessment;
     const examA=subjects.examScore;
      const totalScore=firstA + secondA + thirdA + examA;
 
      if(subjects.name==="Mathematics"){
                 student.totalMaths3=totalScore                
             }//
             if(subjects.name==="English Language"){
                 student.totalEnglish3=totalScore
            }
            if(subjects.name==="Science"){
             student.totalScience3=totalScore
            }
            if(subjects.name==="Social Studies"){
             student.totalSocialStudies3=totalScore
            }
            student.grandtotal3=parseInt(student.totalMaths3) + parseInt(student.totalEnglish3) + parseInt(student.totalScience3) + parseInt(student.totalSocialStudies3)
            student.average3=student.grandtotal3/4
            student.save()
      //set up grade
      let grade;
         if(totalScore>=80 && totalScore<=100){
              grade="A";
         }else if(totalScore>=70 && totalScore<=79){
              grade="B";      
         }else if(totalScore>=60 && totalScore<=69){
              grade="C";       
         }else if(totalScore>=50 && totalScore<=59){
              grade="D";      
         }else if(totalScore>=40 && totalScore<=49){
              grade="E";      
         }else if(totalScore>=0 && totalScore<=39){
              grade="F";
         }
      console.log(`total score for third term ${maths} is ${totalScore} and grade ${grade}`);  
 
     await Student.findOneAndUpdate({_id:req.params.id,"subjects3._id":subject_id}, {$set: {      
         'subjects3.$.total': totalScore ,
         'subjects3.$.grade': grade         
     }},{new:true})
    res.json({message:"Third term scores updated"}) 
 }) 
 
 