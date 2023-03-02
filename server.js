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

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// add post /api/notes
app.post('./api/notes', (req, res) =>{
     
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.listen(PORT, () => {
    console.log("Running  on PORT http://localhost:" + PORT)

})
