// Connection code of Node and Mongodb

// import mongoose
const mongoose = require('mongoose');

// Connection string
mongoose.connect('mongodb://localhost:27017/EMS')

// model creation
const employee = mongoose.model('Employee',{
    id:Number,
    name:String,
    age:Number,
    designation:String,
    salary:Number
})

module.exports={
    employee
}