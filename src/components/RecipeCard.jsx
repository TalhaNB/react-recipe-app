import React from "react"
import "../css/RecipeCard.css"

function RecipeCard(props) {
  const image =
    "https://spicecravings.com/wp-content/uploads/2021/09/Air-Fryer-Garlic-Bread-Featured.jpg"
  return (
    <div className="recipe-card">
      <a href={"/recipes/" + props.recipeData.id}>
        <h3>{props.recipeData.title}</h3>
      </a>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="recipe-card-body">
        <table>
          <tbody>
            <tr>
              <td>{props.recipeData.main}</td>
              <td>{props.recipeData.vegan ? "Vegan" : "Non-Vegan"}</td>
              <td>{props.recipeData.time} Mins</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  unde aliquam eligendi sequi nisi deleniti hic dolorem nesciunt
                  expedita vel, quas esse id vero perferendis asperiores
                  doloribus, blanditiis suscipit repudiandae. Numquam porro
                  deserunt commodi corrupti ipsa recusandae, alias sed ab, nihil
                  beatae mollitia! Sapiente reprehenderit mollitia nemo, quia
                  blanditiis harum minus culpa dolores excepturi tenetur ad,
                  officiis sunt autem! Corrupti?
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecipeCard
