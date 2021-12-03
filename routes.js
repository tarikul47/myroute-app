const express = require('express');
const router = express.Router();

// controller export 
const controller = require('./controller');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the about route
router.get('/', controller.routeGet)

// define the about route
router.post('/about', controller.routeAboutGet)








module.exports = router