const mongoose = require('mongoose');

const StudentSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:[true,'First name is required'],
        minlength:[3,'First name must be atleast 3 characters long'],
        maxlength:[20,'First name must be less than 20 characters long'],
        trim:true,
        validate:{
            validator:function(v){
                return /^[a-zA-Z]+$/.test(v);
            }
        }
    },
    middlename:{
        type:String,    
        trim:true       
    },
    lname:{
        type:String,
        required:[true,'First name is required'],
        minlength:[3,'First name must be atleast 3 characters long'],
        maxlength:[20,'First name must be less than 20 characters long'],
        trim:true,
        validate:{
            validator:function(v){
                return /^[a-zA-Z]+$/.test(v);
            }
        }
    },
    username:{
        type:String,
        required:[true,'Username is required'],
        minlength:[3,'Username must be atleast 3 characters long'],
        maxlength:[20,'Username must be less than 20 characters long'],
        trim:true,
        unique:[true,'Username already exists'],       
    },
    photo:{
        type:String,
        default:'https://res.cloudinary.com/dzqbzqgjw/image/upload/v1589788981/default_avatar_qxqjqe.png',
        trim:true
    },
    student_class:{
        type: String,
        required: [true, 'Class  is required'],      
    },
    student_address:{
        type:String,
        required:[true,'Address is required'],
        minlength:[3,'Address must be atleast 3 characters long'],
        maxlength:[200,'Address must be less than 100 characters long'],
        trim:true,
    },
    subjects:[{
        id:{
            type:mongoose.Schema.Types.ObjectId           
        },
        name: {
            type: String,
            required: [true, 'Name of Subject is required'],
            minlength: [3, 'Name of Subject must be at least 3 characters'],
            maxlength: [100, 'Name of Subject must be less than 100 characters'],            
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
            default:"F"    
        }
    }],
   
    totalMaths:{
        type:Number,
        default:0
    },
    totalEnglish:{
        type:Number,
        default:0
    },
    totalScience:{
        type:Number,
        default:0
    },
    totalSocialStudies:{
        type:Number,
        default:0
    },
    grandtotal:{
        type:Number,
        default:0
    },
    average:{
        type:Number,
        default:0
    },
    subjects2:[{
        id:{
            type:mongoose.Schema.Types.ObjectId           
        },
        name: {
            type: String,
            required: [true, 'Name of Subject is required'],
            minlength: [3, 'Name of Subject must be at least 3 characters'],
            maxlength: [100, 'Name of Subject must be less than 100 characters'],            
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
            default:"F"    
        }
    }],
    totalMaths2:{
        type:Number,
        default:0
    },
    totalEnglish2:{
        type:Number,
        default:0
    },
    totalScience2:{
        type:Number,
        default:0
    },
    totalSocialStudies2:{
        type:Number,
        default:0
    },
    grandtotal2:{
        type:Number,
        default:0
    },
    average2:{
        type:Number,
        default:0
    },



    subjects3:[{
        id:{
            type:mongoose.Schema.Types.ObjectId           
        },
        name: {
            type: String,
            required: [true, 'Name of Subject is required'],
            minlength: [3, 'Name of Subject must be at least 3 characters'],
            maxlength: [100, 'Name of Subject must be less than 100 characters'],            
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
            default:"F"    
        }
    }],
    totalMaths3:{
        type:Number,
        default:0
    },
    totalEnglish3:{
        type:Number,
        default:0
    },
    totalScience3:{
        type:Number,
        default:0
    },
    totalSocialStudies3:{
        type:Number,
        default:0
    },
    grandtotal3:{
        type:Number,
        default:0
    },
    average3:{
        type:Number,
        default:0
    },






    gaurdian_title:{
        type:String,
        required:[true,'Guardian title is required'],
        enum:['Mr','Mrs','Master','Miss','Other'],
        default:'Mr'
    },
  
    gaurdian_fname:{
        type:String,
        required:[true,'First name is required'],
        minlength:[3,'First name must be atleast 3 characters long'],
        maxlength:[20,'First name must be less than 20 characters long'],
        trim:true,
        validate:{
            validator:function(v){
                return /^[a-zA-Z]+$/.test(v);
            }
        }
    },
    gaurdian_lname:{
        type:String,
        required:[true,'First name is required'],
        minlength:[3,'First name must be atleast 3 characters long'],
        maxlength:[20,'First name must be less than 20 characters long'],
        trim:true,
        validate:{
            validator:function(v){
                return /^[a-zA-Z]+$/.test(v);
            }
        }
    },
    gaurdian_phone:{
        type:String,
        required:[true,'Phone number is required'],
        minlength:[10,'Phone number must be atleast 10 characters long'],
        maxlength:[15,'Phone number must be less than 15 characters long'],
        trim:true,
        validate:{
            validator:function(v){
                return /^[0-9]+$/.test(v);
            }
        }
    },
    gaurdian_email:{
        type:String,
        required:[true,'Email is required'],      
        trim:true,
        unique:[true,'Email already exists'],
    },

    gaurdian_address:{
        type:String,
        required:[true,'Address is required'],
        minlength:[3,'Address must be atleast 3 characters long'],
        maxlength:[200,'Address must be less than 100 characters long'],
        trim:true,
    },
    gaurdian_relationship:{
        type:String,
        required:[true,'Relationship is required'],
        enum:['Father','Mother','Uncle','Aunty','Brother','Sister','Other'],
        default:'Father'
    },
   
    remark:{
        type:String,
        default:""
    }
},{timestamps:true})

module.exports=mongoose.model('Student',StudentSchema);