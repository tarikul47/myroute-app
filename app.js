const express = require('express');
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;


//app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes export 
var routes = require('./routes');

// template engine export 
app.set('view engine', 'ejs')

// assest folder design
app.use(express.static('assets'))

// route use define 
app.use('/', routes);


// database conncet and server listen
mongoose
  .connect("mongodb://localhost:27017/task")
  .then(() => {
    app.listen(port, () => {
      console.log("Application is ready to serve on port", port);
    });
  })
  .catch((e) => {
    console.log(e);
  });
