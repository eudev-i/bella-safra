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

app.get('/detalhes', (req,res)=> {
    res.sendFile(__dirname + "/views/detalhes.html")
});

app.get('/login', (req,res)=> {
    res.sendFile(__dirname + "/views/login.html")
});

app.listen(3000, ( ) => console.log("Servidor foi iniciado"));