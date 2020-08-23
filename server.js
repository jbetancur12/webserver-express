const express = require('express');
const hbs = require('hbs');
const app = express();

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Jorge betancuR',
    title: 'Página Web',
  });
});
app.get('/about', function (req, res) {
  res.render('about', {
    title: 'About',
  });
});

app.listen(port, () => {
  console.log(`Aplicación corriendo en el puerto: ${port}`);
});
