const express = require("express");
const path = require("path");

const routes = express.Router();

routes.get('/produtos', (req,res)=> {
    res.render("produtos");
});

routes.get('/bellasafra', (req,res)=> {
    res.render("bellasafra");
});

routes.get('/detalhes', (req,res)=> {
    res.render("detalhes");
});

routes.get('/login', (req,res)=> {
    res.render("login");
});

module.exports = routes;
