"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

/* -------------------------------------------------------/

const nameSchema = new mongoose.Schema({

   // _id: //AUTO CREATED
//    fieldName: String, ==> shorthand

fieldName:{
    type: String,
    default: null,
    trim: true,
    select : true,
    unique: false,
    index: false,
    // required: true 
    rewuired : [true,'Error-Message'],
    enum: [[0,1,2,3],'Error-Message'],
    validate: [function(data) {return true},'Error-Message'],
    get: function(data) {return true},
    set: function(data) {return true}

},
},{
    collection: 'collectonName',
    timestamps: true,
})

/* -------------------------------------------------------*/

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,

    },
    content: {
        type: String,
        trim: true,
        required: true,

    },
    published:{
        type: Boolean,
        default: true
    },

    //createAt
    //updatedAt

},{
    collection: 'blogPosts', timestamps:true
})

// const blogPostModel = mongoose.model('BlogPost',blogPostSchema)
// module.exports = {
//     //BlogCategory
//     BlogPost: BlogPostModel
// }


module.exports = {
    //BlogCategory
    BlogPost: mongoose.model('BlogPost',blogPostSchema)
}