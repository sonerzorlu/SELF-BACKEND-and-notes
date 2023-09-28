"use strict";
/* -------------------------------------------------------
    EXPRESSJS
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
 */

/* ExpressJS Start */
const express = require("express"); // Assing expressFramework to express variable.
const app = express(); // run application on express.

/* ENV */
require("dotenv").config();
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000;
/* ------------------------------------------------------- */
/* HTTP_Methods & URLs */

// app.get('/', (request, response) => {
//     //? run response.send for print-out:
//     // response.send( 'Welcome to Express' )
//     response.send({ message: "called in 'get' method." })
// })
// app.post('/', (request, response) => {response.send({ message: "called in 'post' method." })})
// app.put('/', (request, response) => {response.send({ message: "called in 'put' method." })})
// app.delete('/', (request, response) => {response.send({ message: "called in 'delete' method." })})
// app.all('/', (request, response) => {response.send({ message: "called in 'all' method." })})

//? app.route('url') // path
// app.route('/route')
// .get(  (req,res) => res.send('get')  )
// .post(  (req,res) => res.send('post')  )
// .put(  (req,res) => res.send('put')  )
// .delete(  (req,res) => res.send('delete')  )

//? url options
// app.get('/' , (req, res)=> res.send('get')) //  '/'== root
// app.get('/path' , (req, res)=> res.send('get')) // '/path' == '/path'

// //? express-urls supported kokercharacters

// app.get('/abcx?123' , (req, res)=> res.send('in abc123')) //  koyunca x yada herne karakterse olsada path calisir olmasada path casilir.
// app.get('/abc*123' , (req, res)=> res.send('in abc123')) // yildiz olan yere ne yazarsan yaz path calisir
// app.get('/abcx+123' , (req, res)=> res.send('in abc123'))  // x+ = bir veya daha fazla x karakter yazilabilir

//? express-urls supported regexp:
//app.get('/xyz/' , (req, res)=> res.send('regexp /xyz/')) // iki yatay cizginin arasina yazilan karakterlerin onunw arkasina ne yazarsan path calisir. cunku // arasinda yazan xyz nin oldugu tum oath leri tarar
// app.get(/^xyz/ , (req, res)=> res.send('in regexp /xyz/'))
// app.get(/xyz$/ , (req, res)=> res.send('in regexp /xyz/'))

//? URL Params (req,res)

// @param /user/99/config/update
// app.get('/user/:userId/config/:configParam/*', (req, res)=> {
//     res.send({
//         userId: req.params.userId,
//         configParam: req.params.configParam,
//         url:{
//             protocol: req.protocol,
//             subdomains: req.sundomains,
//             hostname: req.hostname,
//             baseUrl: req.baseUrl,
//             params : req.params,
//             query: req.query,
//             path: req.path,
//             oroginalUrls: req.originalUrl,
//         }
//     })
// })

//? '\d' means only digitchars inregexp:
//? '\w' means only chars inregexp:

// app.get('/user/:userId([0-9]+)',(req,res)=>{
// app.get('/user/:userId(\\d+)', (req, res) => {
//   res.end({
//     params: req.params,
//   });
// });

// app.get('/download', (req,res) => res.download('app.js','changedName.js'))
app.get('/file', (req,res) => res.sendFile(__dirname + '/app.js'))
app.get('/google', (req,res) => res.redirect(302, 'https://www.google.com'))


/* ------------------------------------------------------- */
app.listen(PORT, () => console.log(`Running on http://127.0.0.1:${PORT}`))
// app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`)); // calismiyor
