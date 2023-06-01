const express = require('express');
const app = express();

const port = 8000

const dogs = [
    { name : "rain", breed: "askal"},
    { name : "midnight", breed: "husky"}
]
app.get("/", (req, res) => {
    res.json(dogs)
})

app.get("/dogs/:id", (req, res) => {
    res.json(dogs[parseInt(req.params.id) - 1])
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})