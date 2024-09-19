const express = require("express");
const path = require('path');
const app = express();
const port = 3000;
const data = require('./data/elements.json');
const helpers = require("./modules/helpers");

app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/bootstrap-icons'));

app.set('views', './views')
app.set('view engine', 'pug')

//app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, '/index.html'));
//});

app.get("/", (req, res) => {
  res.render('index', { title: 'Toolbox for Continuous Learning', data: data })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});