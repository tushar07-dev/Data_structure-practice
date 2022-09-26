// ! BLocking , Synchronous way :
// const fs = require("fs"); //*FS- FILE SYSTEM 

// const textIn = fs.readFileSync('./txt/input.txt' , 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the Avocado : ${textIn}.\nCreated on ${Date.now()} by "Tushar"`;
// fs.writeFileSync('./txt/output.txt' , textOut);
// console.log('File Written !');

// ! Non-BLocking , Asynchronous way :
// const fs = require("fs"); //*FS- FILE SYSTEM 

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if(err) return console.log("ERROR !")
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       console.log(data3);
//       fs.writeFile('./txt/final.txt' , `${data2}\n${data3}` ,'utf-8', (err) => {
//         console.log("Your files has been written 🤡 inside fial.txt file");
//       })
//     })
//   })
// })
// console.log('Will read File !');

// ! Web  Server :
// const fs =  require('fs');   //Fs - Fs module
// const http = require('http');//http - http module

// // Each time new requiest is done , this callBack function will get call,
// //  Create a new server;
// const server  = http.createServer((request , response) => {
//   // console.log(request);

//   response.end('Hello from server Tushar!')
// })

// // server.listen(port, 'ip address' , callBacj function)
// server.listen(8000 , '127.0.0.1' , () => {
//   console.log(`Listning to request on port 8000`);
// })
// // *Go to browser and serach `127.0.0.1:8000`


// ! 1] ROuting 

// const fs =  require('fs');   //Fs - Fs module
// const http = require('http');//http - http module
// const url = require('url');//http - url module

// const server  =  http.createServer((req , res) => {
//   const pathname = req.url;
//   console.log("pathname" , pathname);

//   if(pathname === '/' || pathname === '/overview'){
//     res.end('This is the OVER-VIEW page');
//   }
//   else if( pathname === '/product'){
//     res.end('This is the PRODUCT-PAGE');
//   } 
//   else if( pathname === '/api'){
//     fs.readFile(`${__dirname}/dev-data/data.json` , 'utf-8' , (err , data) => {
//       const productData = JSON.parse(data);
//       // console.log(productData);
//       res.writeHead(200 , {'Content-type':'application/json'});
//       res.end(data);
//     })
//     // res.end(' Page')
//   }
//   else{
//     res.writeHead(404 , {'Content-type' : 'text/html',
//                          'my-own-header' : 'hello-world'
//   });
//  res.end('<h1>Pge not found ! </h1>');
// }
// });

// server.listen(8000 , '127.0.0.1' , () => {
//     console.log('Listning to request on port 8000');
// })

// ! 2] Routing data
// Core Mudule ,
const fs =  require('fs');   //Fs - Fs module
const http = require('http');//http - http module;
const url = require('url');//http - url module;

// Custome Modules
const replaceTemplate = require('./modules/replaceTemplate');

//* SERVER


const templateOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html` , 'utf-8')
const templateCard = fs.readFileSync(`${__dirname}/templates/template-card.html` , 'utf-8')
const templateProduct = fs.readFileSync(`${__dirname}/templates/template-product.html` , 'utf-8')

  const data = fs.readFileSync(`${__dirname}/dev-data/data.json` , 'utf-8')
  const dataObject = JSON.parse(data);

  const server  =  http.createServer((req , res) => {
  // console.log("REQ.URL=" ,req.url);
  // console.log(url.parse(req.url , true));   //Give Output an object containing pathnmame & query.

  const {pathname , query} = url.parse(req.url , true);

  //* Overview Page
  if(pathname === '/' || pathname === '/overview'){

    res.writeHead(200 , {'Content-Type': 'text/html'});
    
    const cardsHTML =  dataObject.map((item) => replaceTemplate(templateCard , item)).join('');
    //  console.log(cardsHTML);
    
    
    const output = templateOverview.replace('{%PRODUCT_CARDS%}' , cardsHTML);
    res.end(output);
  }
  
  //* Product page
  else if( pathname === '/product'){
    res.writeHead(200 , {'Content-Type': 'text/html'});
    // console.log("query" , query);
    // console.log("dataObject=" , dataObject);
    const product = dataObject[query.id]; //find one object from array of Objects.
    const output =  replaceTemplate(templateProduct, product);
    console.log("OUtPUT=" , output);
    res.end(output);
  } 

  //* API 
  else if( pathname === '/api'){
    
    res.writeHead(200 , {'Content-Type': 'application/json'});
    res.end(data);

  }

  //* NOt Found
  else{
    res.writeHead(404 , {'Content-type' : 'text/html',
                         'my-own-header' : 'hello-world'
  });
 res.end('<h1>Pge not found ! </h1>');
}
});

server.listen(8000 , '127.0.0.1' , () => {
    console.log('Listning to request on port 8000');
}) 