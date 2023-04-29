require('dotenv').config()
const express = require('express')

const mongoose = require('mongoose')

// ExcerciseRoutes gets all the routes defined(get, post, put, delete etc.)in the excercise-route.js file
const ExcerciseRoutes = require('./routes/excercise-route.js')

// initializing express app or invoking the express function to create an app
const app = express()

// middleware
// express.json middleware attaches the data to the request body coming from POST, PUT, PATCH methods
app.use(express.json())

// registering global middleware -> the functions in here will fire for every request
app.use((req, res, next) => {
 console.log(req.path, req.method)
 next()
})


// Setting up route handlers to react to requests 
// Here in the following line of code app can use all those routes , same thing as app.get('/', (req, res)=> {}) 
app.use('/', ExcerciseRoutes)



// connect to db
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`DB connected and listening on `, process.env.PORT)
    })
    
})
.catch((error) => {
    console.log(error)
})




