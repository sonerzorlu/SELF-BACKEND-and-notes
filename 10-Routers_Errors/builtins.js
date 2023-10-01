"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BUILTIN MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

app.use(express.json());
app.use(express.text());


app.all('/',(req,res)=> {
    res.send({
        received : true,
        body : req.body

    })
})

/* Data Receiving */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));