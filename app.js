const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


//app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


var routes = require('./routes');

app.set('view engine', 'ejs')

app.use(express.static('assets'))


app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})