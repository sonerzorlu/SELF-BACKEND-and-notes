"user strict";

const mongoose = require('mongoose')
const passwordEncrypte = require('../helpers/passwordEncrypt')

const UserSchema = new mongoose.Schema({

    email:{
        type: String,
        trim:true,
        unique: true,
        required: [true, "email field must be required"],
        validate: [
            (email) => (email.includes('@') && email.includes('.')),//ValidationCheck
            'Email type is incorrect'//ErrorMassage
        ]

    },
    password:{
        type:String,
        trim: true,
        required: true,
        // set: (password)=> 'soner' // put ile guncelleme yaptik pasword e 'soner' yazdi
        set: (password)=> passwordEncrypte(password)
         // password e 789* ekler
        // set: (password)=> password + '789*' // password e 789* ekler


    },
    firstName: String,

    lastName: String,

},{
    collection: "users",
    timestamp: true,
})

module.exports = mongoose.model('User',UserSchema)