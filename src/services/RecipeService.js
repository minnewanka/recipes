import Parse from 'parse'
import Ingredients from '../containers/recipeForm/components/ingredients/index'

const createRecipe = (name, description, ingredients) => {
  const Recipe = Parse.Object.extend('Recipe')
  const Ingredient = Parse.Object.extend('Ingredient')

  // Create the Recipe
  const recipe = new Recipe()
  recipe.set('name', name)
  recipe.set('description', description)

  // Create the Ingredients
  ingredients.forEach(item => {
    var ingredient = new Ingredient()
    ingredient.set('text', item.text)
    ingredient.set('parent', recipe)
    ingredient.save()
  })
}

const getRecipe = async id => {
  const Recipe = Parse.Object.extend('Recipe')
  const Ingredient = Parse.Object.extend('Ingredient')

  const query = new Parse.Query(Recipe)
  const result = await query.get(id)
  var ingredientQuery = new Parse.Query(Ingredient)
  ingredientQuery.equalTo('parent', result)
  const ingredientResults = await ingredientQuery.find()

  return {
    recipeId: result.id,
    name: result.get('name'),
    description: result.get('description'),
    ingredients: ingredientResults.map(result => result.get('text'))
  }
}

const getRecipes = async () => {
  const Recipe = Parse.Object.extend('Recipe')

  const query = new Parse.Query(Recipe)
  const results = await query.find()
  const recipes = results.map(result => ({
    recipeId: result.id,
    name: result.get('name'),
    description: result.get('description')
  }))

  return recipes
}

export { createRecipe, getRecipe, getRecipes }
