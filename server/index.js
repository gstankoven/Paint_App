const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

//variables to store the stock status of the colours and recent activity
//decided to store them in variables, but if more permanent storage is needed, a database or encrypted files would work
let colours = {Blue: 'available', Grey: 'available', Black: 'available', White: 'low', Purple: 'out'}
let info = []

//Get request to the api sending the colour's stock as well as the recent activity information
app.get('/api', (req, res) => {
    res.status(200).send([colours, info])
})

//Put request to the api storing the new stock status, as well as adding to the recent activity (up to 20)
app.put('/api/update/:colour/:status/:time/:comment', (req, res) => {
    if(colours[req.params.colour] === req.params.status){
        res.status(200).send("OK")
        return
    }

    colours[req.params.colour] = req.params.status

    if(info.length<20){
        info.push({colour: req.params.colour, status: req.params.status, time: req.params.time, comment: req.params.comment})
    }else{
        info.shift()
        info.push({colour: req.params.colour, status: req.params.status, time: req.params.time, comment: req.params.comment})
    }

    res.status(200).send("OK")
})


const PORT = 3001
app.listen(process.env.PORT || PORT, () => {console.log(`Listening on port ${PORT}`)})