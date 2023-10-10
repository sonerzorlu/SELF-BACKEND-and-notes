"user strict";

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    email:{
        type: String,
        trim:true,
        unique: true,
        required: [true, "email field must be required"],

    },
    password:{
        type:String,
        trim: true,
        required: true,
        

    },
    firstName: String,

    lastName: String,

},{
    collection: "users",
    timestamp: true
})