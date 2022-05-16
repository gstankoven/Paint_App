const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

let colours = {Blue: 'available', Grey: 'available', Black: 'available', White: 'low', Purple: 'out'}

app.get('/api', (req, res) => {
    res.send(colours)
})

app.put('/api/update/:colour/:status', (req, res) => {
    colours[req.params.colour] = req.params.status
    res.status(200).send("OK")
})


const port = process.env.PORT || 3001
app.listen(port, () => {console.log(`Listening on port ${port}`)})