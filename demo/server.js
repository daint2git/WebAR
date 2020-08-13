const express = require('express')

const app = express()

app.use(express.static('./'))

app.listen(80, () => {
  console.log(`Example app listening at http://localhost:${80}`)
})
