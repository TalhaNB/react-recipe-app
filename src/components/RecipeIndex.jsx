import React from "react"
import RecipeCard from "./RecipeCard"

function RecipeIndex(params) {
  const recipeCards = params.recipeData.map((recipe, id) => (
    <RecipeCard recipeData={recipe} key={id} />
  ))

  return (
    <div className="wrapper">
      <div className="recipe-card-grid">{recipeCards}</div>
    </div>
  )
}

export default RecipeIndex
