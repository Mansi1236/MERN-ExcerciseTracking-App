const mongoose = require('mongoose')
// mongoose allows to create models/schemas for data in the db
// mongodb is schema less

const Schema = mongoose.Schema


// Creating the excercise document or schema -> how the data should look like
const ExcerciseSchema = new Schema({
title: {
    type: String,
    required: true
},
ExcerciseName : {
    type: String,
    required: true
},
Duration: {
    type: Number,
    required: true
}
}, {timestamps: true}) 

/* 
The schema defined above tells how the data should look like.(Structure of the document)
Now we need to make a model based on this schema 
Models applies the schema to a particular model -> and then we can use the model to interact with the collection

*/

module.exports = mongoose.model('ExcerciseModel', ExcerciseSchema)
// It's going to pluralize it create an excercise collection automatically -> ExcerciseModels collection

