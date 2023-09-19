"use strict";

const http = require("node:http"); //! built in (yerlesik) module oldugu icin npm install yamadik

// const app = http.createServer((request,rensponse)=>{
//     rensponse.end('<h1>Welcme to NodeJS Server</h1>') //? islemler bitti cevap verme zamani
// console.log(response);

// })

//! local host ip : degistitilemez!!!  //127.0.0.1:8000
// app.listen(8000,()=> console.log('Server Runned : http://127.0.0.1:8000'))

// const app = http.createServer((req,res)=>{
//     // console.log(req);
//     // console.log(res);
//     if (req.url == '/'){
//         res.end('Main Page')
//     }else if (req.url == '/second'){
//         res.end('second page')
//     }else{
//         res.end('server  is running')
//     }

//     res.end('server is running')
// }

// ).listen(8000,()=>console.log('Server Runned : http://127.0.0.1:8000'))

// const app = http
//   .createServer((req, res) => {
//     if (req.url == "/") {
//       res.statusCode = 404;
//       res.statusMessage = " Not Found";

//       res.setHeader("Content-Type", "text/html");
//       res.setHeader("another-value", "closed");

//       res.write("satir1");
//       res.write("satir2");
//       res.end("server is running");
//     } else if (req.url == "/api") {
//       if (req.method == "GET") {
//         res.writeHead(200, {
//           "Content-Type": "text/html",
//           "another-value": "closed",
//         });
//         //! overload example
//         res.writeHead(200, "Status Message", {
//           "Content-Type": "text/html",
//           "another-value": "closed",
//         });
// const obj = {
//     result: true,
//     message : "Islem basarili"
// }
//         // res.end("OK");
//         res.end(JSON.stringify(obj));
//       } else {
//         res.end("Not supporting different method");
//       }
//     } else {
//       res.end("server is running");
//     }
//   })
//   .listen(8000, () => console.log("Server Runned : http://127.0.0.1:8000"));


// console.log(process.env.ENV_NAME);
require('dotenv').config(); //! dotenv modulunu aktif hale getirdik


// console.log(process.env.PORT);//! .env dosyasini okuma
// console.log('NODE_ENV:',process.env.NODE_ENV);
// console.log('ENV_HOST:',process.env.ENV_HOST + ':' + process.env.ENV_PORT)
// console.log('ENV_EXAMPLE_STR:',process.env.ENV_EXAMPLE_STR);
// console.log('ENV_EXAMPLE_TXT:',process.env.ENV_EXAMPLE_TXT.split(' '))




// const PORT = process.env.PORT ?? 9000 //! ??=.env dosyasinda port bilgisi varsa al // (undefined or null) or 8000

const PORT = process.env.PORT || 9000 //! ??=.env dosyasinda port bilgisi varsa al // false or 8000

http.createServer((req,res) =>{

res.end(' <h1>My very first server with NODEJS</h1>  ')

}).listen(PORT, ()=> console.log(`Server is running at: 127.0.0.1:${PORT}`))
