require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


// handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'franco bernal',
        titulo: 'express'
    });
})
app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'franco bernal',
        titulo: 'express'
    });
})
app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'franco bernal',
        titulo: 'express'
    });
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/views/404.html')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})