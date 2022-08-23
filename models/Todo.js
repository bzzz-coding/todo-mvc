const mongoose = require('mongoose') // Referencing mongoose

// Define the Schema by constructing a mongoose instance where the key name corresponds to the property name in the collection
const TodoSchema = new mongoose.Schema({
  // Define a property called 'todo' with a schema type String which maps to an internal validator that will be triggered when the model is saved to the database. It will fail if the value is not a string.
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

// Exporting the module by calling the model constructor on the Mongoose instance and pass it the name of the collection and a reference to the schema definition.
module.exports = mongoose.model('Todo', TodoSchema)
