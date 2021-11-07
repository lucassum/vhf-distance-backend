const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000

const antennas = []

app.use(cors())
app.use(morgan('dev'))
app.get('/', (req, res) => 'teste')

app.post('/', (req, res) => {
    antennas.push(req.body)
    return antennas;
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))