const http = require('http')
const mongoose = require('mongoose')

const hostname = 'localhost'
const port = 3000

/*  username : ticketingsystem, Password : a6krmaSGoX3O6CL6  */
// Database Connaction
mongoose.connect(
  'mongodb+srv://ticketingsystem:a6krmaSGoX3O6CL6@cluster0.hppktsf.mongodb.net/?retryWrites=true&w=majority'
  )
.then(() => {
  console.log('Connacted to database')
})
.catch(() => {
  console.log('Connaction Failed')
})

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World')
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});