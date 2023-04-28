// Using express router since express app can't be accessed outside of the server.js file
// to create routes we use express route

const express = require('express')

// creates an instance of the router 
const router = express.Router()

// Dummy routes for testing
router.get('/', (req, res) => {
res.json({message: "GET all excercises"})
})

// GET a single excercise through id
router.get('/:id', (req, res) => {
    res.json({message: "GET a single excercise"})
})

// POST an excercise
router.post('/', (req, res) => {
    
    res.json({message: "POST an excercise"})
})

// UPDATE an excercise with id
router.put('/:id' , (req, res) => {
    res.json({message: "UPDATE an excercise"})
})

// DELETE an excercise
router.delete('/:id', (req, res) => {
    res.json({message: "DELETE an excercise"})
})




//exporting all the routes that are created
module.exports= router
