const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(express.static('plantao-app'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})