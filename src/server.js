const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname + '../dist'));
app.listen(PORT);
app.get('/home', (req,res) => {
  res.sendFile(path.resolve(__dirname,'../dist/index.html'))
})
