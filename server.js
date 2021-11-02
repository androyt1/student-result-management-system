require('dotenv').config();
const express = require('express');
const cors = require('cors');
const error=require('./middlewares/ErrorHandler')
const DBConnect= require('./util')
const UserRouter=require('./routes/User')
const SubjectRouter=require('./routes/Subject')
const StudentRouter=require('./routes/Student')

//set up express app
const app = express();

DBConnect();

//set up middlewares
app.use(cors());
app.use(express.json());


//set up routes
app.use('/api/v1/user',UserRouter);
app.use('/api/v1/subject',SubjectRouter);
app.use('/api/v1/student',StudentRouter);
//set up error handling
app.use(error.ErrorHandler);

//set up port
const port = process.env.PORT || 5000;
//listen to port
app.listen(port, () => console.log(`Server started on port ${port}`));