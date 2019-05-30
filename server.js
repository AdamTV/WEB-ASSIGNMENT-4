/*
SERVER.JS FOR WEAKEST LINK EMULATION
BY: ADAM STINZIANI
EMAIL: astinziani@myseneca.ca
DATE: 2019-05-30
*/
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(__dirname + 'img')); //Serves resources from img folder


// setup a 'route' to listen on the default url path
app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname,"/index.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/index.html"));
});

app.get("/html/rules.html", (req, res) => {
    res.sendFile(path.join(__dirname,"/html/rules.html"));
});

app.get("/html/mainMenu.html", (req, res) => {
    res.sendFile(path.join(__dirname,"/html/mainMenu.html"));
});

app.get("/html/game.html", (req, res) => {
    res.sendFile(path.join(__dirname,"/html/game.html"));
});

app.get("/html/api.html", (req, res) => {
    res.sendFile(path.join(__dirname,"/html/api.html"));
});
app.listen(HTTP_PORT);