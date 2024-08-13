const baseUrl = 'https://www.themealdb.com/api/json/v1/1/'

export const getData = async (category: string) => {
  const res = await fetch(`${baseUrl}/filter.php?c=${category}`)

  if(!res.ok) console.log("fetching data failed")

  const data = await res.json();

  return data;
}

export const getCategories = async (endpoint: string) => {
  const res = await fetch(`${baseUrl}/${endpoint}`)

  if(!res.ok) console.log("fetching data failed")

  const data = await res.json();

  return data;
}

export const getSingleRecipe = async (id: string) => {
  const response = await fetch(`${baseUrl}/lookup.php?i=${id}`)
  
  if(!response.ok) console.log('fetching single Recipe failed!')

  const recipe = await response.json();

  return recipe;
}

export const getRecommendRecipes = async (area: string) => {
  const response = await fetch(`${baseUrl}/filter.php?a=${area}`)

  if(!response.ok) console.log('fetching recommended failed!')

  const recommended = await response.json();
  
  return recommended;
}

export const getRecipeByName = async (name: string) => {
  const response = await fetch(`${baseUrl}/search.php?s=${name}`)

  if(!response.ok) console.log('fetching recipy by name  failed!')

  const recipes = await response.json();
  
  return recipes
}
