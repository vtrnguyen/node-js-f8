const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const { log } = require('console');
const app = express();
const port = 3000;

// handle static file
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// http logger
// app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// rendering
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    console.log(req.query);
    res.render('news');
})

app.get('/search', (req, res) => {
    res.render('search');
})

app.post('/search', (req, res) => {
    console.log(req.body);
    res.render('search');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})