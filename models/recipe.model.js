const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  author: {
    name: String,
    email: String
  },
  ingredients: [String],
  averageCost: String
})

const recipe = mongoose.model('Recipe', recipeSchema)

module.exports = recipe;