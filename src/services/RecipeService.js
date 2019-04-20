import Parse from 'parse'
import Ingredients from '../containers/recipeForm/components/ingredients/index'

const createRecipe = async (name, description, ingredients, preparation) => {
  const Recipe = Parse.Object.extend('Recipe')
  const Ingredient = Parse.Object.extend('Ingredient')
  const Preparation = Parse.Object.extend('Preparation')

  // Create the Recipe
  const recipe = new Recipe()
  recipe.set('name', name)
  recipe.set('description', description)

  await recipe.save()

  // Create the Ingredients
  await Promise.all(
    ingredients.map(item => {
      var ingredient = new Ingredient()
      ingredient.set('text', item.text)
      ingredient.set('parent', recipe)
      ingredient.save()
    })
  )

  // Create the Preparation
  await Promise.all(
    preparation.map(item => {
      var preparationStep = new Preparation()
      preparationStep.set('text', item.text)
      preparationStep.set('parent', recipe)
      preparationStep.save()
    })
  )
  return recipe.id
}

const getRecipe = async id => {
  const Recipe = Parse.Object.extend('Recipe')
  const Ingredient = Parse.Object.extend('Ingredient')
  const Preparation = Parse.Object.extend('Preparation')

  const query = new Parse.Query(Recipe)
  const result = await query.get(id)

  var ingredientQuery = new Parse.Query(Ingredient)
  ingredientQuery.equalTo('parent', result)
  const ingredientResults = await ingredientQuery.find()

  var preparationQuery = new Parse.Query(Preparation)
  preparationQuery.equalTo('parent', result)
  const preparationResults = await preparationQuery.find()

  return {
    recipeId: result.id,
    name: result.get('name'),
    description: result.get('description'),
    ingredients: ingredientResults.map(result => result.get('text')),
    preparation: preparationResults.map(result => result.get('text'))
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
