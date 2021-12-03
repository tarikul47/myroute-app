const express = require('express')
const app = express()
const port = 5000

var birds = require('./birds')


app.use('/', birds);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})