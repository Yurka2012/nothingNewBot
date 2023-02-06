//Файл для регенерации ссылки для 24/7 работы
const express = require('express');

const server = express();



server.all('/', (req, res)=>{

   res.setHeader('Content-Type', 'text/html');

   res.write('...');

   res.end();

})



function keepAlive(){

   server.listen(3000, ()=>{console.log("Бот запущен")});

}



module.exports = keepAlive;