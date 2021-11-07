const recipe = require('../models/recipe.model');

const recipeController = {

  getRecipes: async function(req,res){

    try {
      let allRecipes = await recipe.find({});
      res.json(allRecipes)
    } catch (error) {
      return res.status(400).send(`Couldn't find your recipes.`)
    }

  }

}

module.exports = recipeController;