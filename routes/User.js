const express=require('express');
const UserController=require('../controllers/User');
const router=express.Router();
const verifyToken=require('../middlewares/ErrorHandler');

//register user
router.route('/register-user').post(UserController.createUser);
//login user
router.route('/login-user').post(UserController.loginUser);

//Protcted routes
router.use(verifyToken.verifyToken);
router.route('/dashboard').get(UserController.dashboard);

module.exports=router