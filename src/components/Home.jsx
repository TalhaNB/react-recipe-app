import React from "react"
import Hero from "./Hero"
import RecipeIndex from "./RecipeIndex"

function Home(params) {
  return (
    <div>
      <Hero title={params.title} />
      <div>
        <RecipeIndex display={params.show} recipeData={params.recipeData} />
      </div>
    </div>
  )
}

export default Home
