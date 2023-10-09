"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const router = require('express').Router()

const Todo = require('./todo.model')

// LIST:
router.get('/', async (req, res) => {

    // const data = await Todo.findAll()
    const data = await Todo.findAndCountAll()
    res.status(200).send({
        error: false,
        result: data
    })
})

// CREATE:
router.post('/', async (req, res) => {

    // const data = await Todo.create({
    //     title: 'Test Title',
    //     description: 'Test Description',
    // })
    // console.log( typeof req.body, req.body )
    const data = await Todo.create(req.body)
    res.status(201).send({
        error: false,
        body: req.body, // Send Data
        message: 'Created',
        result: data // Receive Data
    })
})

// READ:
router.get('/:id', async (req, res) => {

    // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
    // const data = await Todo.findOne({ where: { id: req.params.id } })
    
    const data = await Todo.findByPk(req.params.id)
    res.status(200).send({
        error: false,
        result: data
    })
 
})

//Update
router.put('/:id', async(req, res) => {

    const isUpdated = await Todo.update(req.body, { where: { id: req.params.id } })
    res.send({
        error: false,
        body: req.body, // Send Data
        message: 'Updated',
        isUpdated: isUpdated,
        result: await Todo.findByPk(req.params.id) // Receive Data
    })
});
//Delete
router.delete('/:id', async(req, res) => {

    const isDeleted = await Todo.destroy({ where: { id: req.params.id } })
    res.send({
        error: false,
      //  body: req.body, // Send Data delete isleminde yapilmaz
        message: 'Deleted',
        isDeleted: Boolean(isDeleted)
      //  result: await Todo.findByPk(req.params.id) // Receive Data
    })
});



module.exports = router