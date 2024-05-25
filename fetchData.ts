import { waitForDebugger } from "inspector";
import { resolve } from "path";

export const getData = async (url: string) => {
  const res = await fetch(url)

  if(!res.ok) console.log("fetching data failed")

  const data = await res.json();

  return data;
}

export const getSingleRecipe = async (id: string) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  
  if(!response.ok) console.log('fetching single Recipe failed!')

  const recipe = await response.json();

  return recipe;
}

export const getRecommendRecipes = async (area: string) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)

  if(!response.ok) console.log('fetching recommended failed!')

  const recommended = await response.json();
  
  return recommended;
}

export const getRecipeByName = async (name: string) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)

  if(!response.ok) console.log('fetching recipy by name  failed!')

  const recipes = await response.json();
  
  return recipes
}


export const wait = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}