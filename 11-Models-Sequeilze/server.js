"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//Accept json data:

app.use(express.json());

app.all("/", (req, res) => {
  res.send("Welcome to Todo API");
});

/* ------------------------------------------------------- */

//* sequelize

const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("sqlite:./db.sqlite3")
const sequelize = new Sequelize(
  "sqlite:" + process.env.SQLITE || "./db.sqlite3"
);

const Todo = sequelize.define("todo", {
  // ID IS CREATED AUTO BY DATABASE
  // id:{
  //     type: DataTypes.INTEGER,
  //     unique: true,
  //     allowNull: false,
  //     field_name: 'coustume_column_name',// id ismi degistirme,
  //     commnet: 'Description',
  //     primaryKey: true,
  //     autoIncrement: true,
  // },
  baslik: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  description: DataTypes.TEXT,

  priority: {
    // 1: high, 0: normal , -1: low
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0, // set dafault value
  },

  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});
//! no needed to define "createdAt" and "updatedAt" sqlite make them aoutomatically
//TODO: createdAt: false // unset //
//TODO:  createdAt: false // unset//

//* synchronization:
//! SYNC MUST RUN ONCE!
 //sequelize.sync()
// sequelize.sync({force:true}) // drop & create :
//sequelize.sync({ alter: true }); // TO BACKUP & DROP & CREATE & FROM BACKUP

// Connect:

sequelize.authenticate()
.then(()=>console.log('* DB Connected'))
.catch((err)=> console.log('*DB Not Connected *',err))

/* ------------------------------------------------------- */

const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler is runned");
  res.status(errorStatusCode).send({
    error: true,
    message: err.message,
    cause: err.cause,
  });
};

app.use(errorHandler);

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running at : http:127.0.0.1:" + PORT));
