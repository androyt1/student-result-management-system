const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name of Subject is required'],
        minlength: [3, 'Name of Subject must be at least 3 characters'],
        maxlength: [100, 'Name of Subject must be less than 100 characters'],
        unique: true,
        trim: true,        
    },
    firstAssessment: {
        type: Number,
        required: [true, 'First Assessment is required'],
        default: 0,
        min: [0, 'First Assessment must be greater than 0'],
        max: [20, 'First Assessment must be less than 20'],
    },
    secondAssessment: {
        type: Number,
        required: [true, 'Second Assessment is required'],
        default: 0,
        min: [0, 'Second Assessment must be greater than 0'],
        max: [20, 'Second Assessment must be less than 20'],
    },
thirdAssessment: {
        type: Number,
        required: [true, 'Second Assessment is required'],
        default: 0,
        min: [0, 'Third Assessment must be greater than 0'],
        max: [20, 'Third Assessment must be less than 20'],
    },
    examScore:{
        type:Number,
        required: [true, 'Exam Score is required'],
        default: 0,
        min: [0, 'Exam Score must be greater than 0'],
        max: [80, 'Exam Score must be less than 20'],
    },
    total:{
        type:Number,
        default:0
    },
    grade:{
        type:String,
        enum:['A','B','C','D','E','F'],
        default:""    
    }
})


module.exports = mongoose.model('Subject', SubjectSchema);