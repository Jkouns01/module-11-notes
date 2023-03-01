const express = require('express')
const fs = require('fs')
const path = require('path');


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, results) => {
        if (err) {
            throw err
        }
        res.send(results)
    })
})

// add post /api/notes


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.listen(PORT, () => {
    console.log("Running  on PORT http://localhost:" + PORT)

})

// app.get('./api/notes', function(req, res){
//     readFile('./db/db.json','utf8').then(function(data){
//         notes= []/concat(json.parse(data))
//         res.json(notes)
//     }) 
// })
// app.pot('api/notes', function(req,res){
// const note = req.body
// fs.readFile('./db/db.json', 'utf8').then(function(data){

// })
// })
