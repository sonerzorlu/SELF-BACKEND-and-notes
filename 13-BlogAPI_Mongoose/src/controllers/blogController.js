"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// https://mongoosejs.com/docs/queries.html

// Catch async-errors and send to errorHandler:

require('express-async-errors')

/* ------------------------------------------------------- */

const {BlogPost} = require('../models/blogModel')



// ------------------------------------------
// BlogCategory
// ------------------------------------------
module.exports.BlogPost = {

    list: async (req, res) => {

        const data = await BlogPost.find()// get Primary Data

        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },


    // CRUD ->

    create: async (req, res) => {
        
        // const data = await BlogPost.create({
        //     fieldName: 'value',
        //     fieldName: 'value',
        //     fieldName: 'value',
        // })
        const data = await BlogPost.create(req.body)

        res.status(201).send({
            error: false,
            body: req.body,
            result: data,
        })
    },

    read: async (req, res) => {
        const data = await BlogPost.findOne({ _id: req.params.postId})
        // const data = await BlogPost.findById(req.params.id)
        res.status(200).send({
            error: false,
            result: data,
        })

    },

    update: async (req, res) => {
        
        // const data = await BlogPost.findByIdAndUpdate(req.params.postId, req.body, { new: true }) // return new-data
     
    },

    delete: async (req, res) => {
        
     

    },
}