// import dependency - hanya express
const express = require('express');
const app = express();
const port = 3000;

// bikin route http
app.get('/', function(req, res) {
    res.send('<h1>Ini adalah server nodejs untuk belajar</h1>');
})


// mengaktifkan listen to port
app.listen(port, function(req,res) {
    console.log(`Server nodejs berjalan di port ${port}`)
})