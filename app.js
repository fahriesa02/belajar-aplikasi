// import dependency - hanya express
import express from 'express';
const app = express();
const port = 3000;

// bikin route http
app.get('/', function(req, res) {
    res.json('Hello World!');
})


// mengaktifkan listen to port
app.listen(port, function(req,res) {
    console.log(`Server nodejs berjalan di port ${port}`)
})