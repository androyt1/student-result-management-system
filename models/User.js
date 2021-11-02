
const mongoose = require('mongoose');

//set up user schema

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters'],
        maxlength: [500, 'Password must be at most 32 characters'],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,500}/, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'],
        trim: true,
    },
    usertype: {
        type: String,
        required: [true, 'Usertype is required'],
        enum: ['admin', 'user'],
        default: 'user',
    }
},{timestamps:true})

module.exports=mongoose.model('User', UserSchema);