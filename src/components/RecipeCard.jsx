import React from "react"
import "../css/RecipeCard.css"

function RecipeCard(params) {
  return (
    <div className="recipe-card">
      <h3>{params.recipeData.title}</h3>
      <div>
        <img src={params.recipeData.image} alt="" />
      </div>
      <div className="recipe-card-body">
        <table>
          <tbody>
            <tr>
              <td>{params.recipeData.main}</td>
              <td>{params.recipeData.isVegan ? "Vegan" : "Non-Vegan"}</td>
              <td>{params.recipeData.time} Mins</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <p>{params.recipeData.method.substr(0, 150)}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecipeCard
