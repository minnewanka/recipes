import Parse from 'parse'

const createRecipe = (name, description) => {
  const Recipe = Parse.Object.extend('Recipe')
  const recipeQuery = new Recipe()
  recipeQuery.set('name', name)
  recipeQuery.set('description', description)
  return recipeQuery.save()
}

const getRecipe = id => {
  const Recipe = Parse.Object.extend('Recipe')
  const query = new Parse.Query(Recipe)
  query.equalTo('id', id)
  const result = query.first()
  const recipe = {
    name: result.get('name'),
    description: result.get('description')
  }
  return recipe
}

const getRecipes = async () => {
  const Recipe = Parse.Object.extend('Recipe')
  const query = new Parse.Query(Recipe)
  const results = await query.find()
  const recipes = results.map(result => ({
    id: result.id,
    name: result.get('name'),
    description: result.get('description')
  }))
  console.log(recipes)
  return recipes
}

export { createRecipe, getRecipe, getRecipes }
