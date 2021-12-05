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
router.get('/', controller.getTaskRoute)

// define the task route
router.post('/task', controller.postTaskRoute)

// define the single task route
router.get('/task/:id', controller.getSingleTaskRoute)

// define the single task update route
router.put('/task/:id', controller.updateSingleTaskRoute)

// define the single task update route
router.put('/task/status/:id', controller.statusSingleTaskRoute)

// define the single task delete route
router.delete('/task/:id', controller.deleteSingleTaskRoute)






module.exports = router