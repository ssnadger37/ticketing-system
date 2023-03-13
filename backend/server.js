const http = require('http');
const mongoose = require('mongoose')

const hostname = 'localhost';
const port = 2023;
//no changes has been done
/* username : ticketingsystem , password : a6krmaSGoX3O6CL6 */
mongoURL = 'mongodb+srv://ticketingsystem:a6krmaSGoX3O6CL6@cluster0.hppktsf.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect( mongoURL )
.then(() =>  console.log('Connacted to database')  )
.catch(() =>  console.log('Connaction failed')   )

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});