import React from "react"
import Hero from "./Hero"
import RecipeCard from "./RecipeCard"

function Home(props) {
  const { title, show, recipeData } = props

  const renderReipes = () =>
    recipeData.map(
      (recipe, id) => <RecipeCard recipeData={recipe} key={id} />
    )

  return (
    <div>
      <Hero title={title} />
      <div className="wrapper">
        {show === "all" && (
          <div className="recipe-card-grid">{renderReipes()}</div>
        )}
        {show === "latest" && (
          <div className="recipe-card-grid">{renderReipes()}</div>
        )}
      </div>
    </div>
  )
}

export default Home
