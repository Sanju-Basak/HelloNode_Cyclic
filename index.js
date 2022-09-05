//import packages

const express = require('express')
const app = express()
const port = process.env.PORT || 8086;


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send({
    messege: "Hello World",
    status: "Alive"
  })
});


//connection
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });