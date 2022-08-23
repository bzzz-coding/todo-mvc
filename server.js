const express = require('express') // require express
const app = express() // renaming the function for brevity

// connectDB is an async function that connects to the database
const connectDB = require('./config/database') 
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'}) // require dotenv

connectDB()

// setting the view through ejs
app.set('view engine', 'ejs')
// executing middleware to return static files coming from 'public' folder or will return HTTP 404
app.use(express.static('public'))
// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }))
// convert request body to a JSON Object
app.use(express.json())

app.use('/', homeRoutes) 
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    