const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

let colours = {Blue: 'available', Grey: 'available', Black: 'available', White: 'low', Purple: 'out'}
let info = []

app.get('/api', (req, res) => {
    res.send([colours, info])
})

app.put('/api/update/:colour/:status/:comment', (req, res) => {
    if(colours[req.params.colour] === req.params.status){
        res.status(200).send("OK")
        return
    }

    colours[req.params.colour] = req.params.status
    let now = new Date().toLocaleString()

    if(info.length<20){
        info.push({colour: req.params.colour, status: req.params.status, time: now, comment: req.params.comment})
    }else{
        info.shift()
        info.push({colour: req.params.colour, status: req.params.status, time: now, comment: req.params.comment})
    }

    res.status(200).send("OK")
})


const port = process.env.PORT || 3001
app.listen(port, () => {console.log(`Listening on port ${port}`)})