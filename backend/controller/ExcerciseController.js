// Importing ExcerciseModel form excercise-model.js to interact with the db
const mongoose = require('mongoose')
const ExcerciseModel = require('../models/Excercise-model.js')

// get all excercises 
const getAllExcercises = async(req, res) => {
    const AllExcercises = await  ExcerciseModel.find({

    }).sort({createdAt: -1})
    res.status(200).json(AllExcercises)
}


// get a single excercise 
const getSingleExcercise = async(req, res) => {
    const {id} = req.params
    // checking if the id is valid so that mongodb doesn't throw the internal error
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout with the given id"})
    }

    const SingleExcercise = await ExcerciseModel.findById(id)
    if(!SingleExcercise) {
        return res.status(400).json({error: "No such workout exist"})
    }
    res.status(200).json(SingleExcercise)
}


// create a new excercise 
const createExcercise = async(req, res)  => {

    const {title, ExcerciseName, Duration} = req.body

    // ad doc to db
    try {
    const createExcercises = await ExcerciseModel.create({
        title, ExcerciseName, Duration
    })
    res.status(200).json(createExcercises)
    }
    catch(error) {
    res.status(400).json({error: error.message})
    }


}

// update an excercise 
const UpdateExcercise = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout with the given id"})
    }

    const updateExcercises = await ExcerciseModel.findByIdAndUpdate({_id: id} , {
...req.body
    })

    if(!updateExcercises) {
        return res.status(400).json({error: "No such excercise"})
    }

    res.status(200).json(updateExcercises)

    



}




// delete an excercise 
const DeleteExcercise = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout with the given id"})
    }

    const deleteexcercises =  await ExcerciseModel.findOneAndDelete({_id: id}) 

    if(!deleteexcercises) {
        return res.status(404).json({error: "No such Excercise"})
    }

    res.status(200).json(deleteexcercises)

}


//exporting 

module.exports = {
createExcercise,
getSingleExcercise,
getAllExcercises,
UpdateExcercise,
DeleteExcercise



}