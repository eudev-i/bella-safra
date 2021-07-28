const express = require('express');
const { reset } = require('nodemon');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/produtos', (req,res)=> {
    res.sendFile(__dirname + "/views/produtos.html")
});

app.get('/bellasafra', (req,res)=> {
    res.sendFile(__dirname + "/views/bellasafra.html")
});

app.listen(3000);