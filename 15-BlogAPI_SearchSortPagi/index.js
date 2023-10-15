"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/*
 * $ npm init -y
 * $ npm i express dotenv express-async-errors
 * $ npm i mongoose
*/

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

/* ------------------------------------------------------- */
const session = require('cookie-session')
app.use(session({
    secret:process.env.SECRET_KEY || 'secret_key_for_cookies',
    //name:cookie,// default req.session
    // maxAage: 1000*60*60*24 // 1 day (miliseconds)


}))
/* ------------------------------------------------------- */

app.use(express.json())

// Connect to MongoDB with Mongoose:
require('./src/dbConnection')

app.use(require('./src/middlewares/findSearchSortPage'))

// HomePage:
app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})

// Routes:
app.use('/user',require('./src/routes/userRoute'))
app.use('/blog', require('./src/routes/blogRoute'))

/* ------------------------------------------------------- */
// Synchronization:
// require('./src/sync')()

// errorHandler:
app.use(require('./src/errorHandler'))

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))