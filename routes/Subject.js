const express=require('express');

const router=express.Router();
const SubjectController=require('../controllers/Subject');

router.route('/create-subject').post(SubjectController.createSubject);


module.exports=router;