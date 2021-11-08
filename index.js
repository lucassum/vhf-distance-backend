const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000

let antennas = []

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.get('/', (req, res) => res.json(antennas))
app.delete('/', (req, res) => {
    antennas = []
    res.json(antennas)
})
app.post('/', (req, res) => {
    const { height } = req.body
    const distance = Math.sqrt(12.76 * Number(height))
    antennas.push({ ...req.body, distance })
    res.status(201).json(antennas)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))