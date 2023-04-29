// Using express router since express app can't be accessed outside of the server.js file
// to create routes we use express route

const express = require('express')

const {createExcercise ,
    getAllExcercises,
    getSingleExcercise,
    UpdateExcercise,
    DeleteExcercise

} = require('../controller/ExcerciseController.js')


// creates an instance of the router 
const router = express.Router()

// Dummy routes for testing
router.get('/', getAllExcercises)

// GET a single excercise through id
router.get('/:id', getSingleExcercise)

// POST an excercise

//Here we're using the ExcerciseModel to create a new document -> excercise

router.post('/', createExcercise)

// UPDATE an excercise with id
router.patch('/:id' , UpdateExcercise)

// DELETE an excercise
router.delete('/:id', DeleteExcercise)




//exporting all the routes that are created
module.exports= router
