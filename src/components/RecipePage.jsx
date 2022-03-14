import React from "react"
import "../css/Recipe.css"
import { useParams } from "react-router-dom"

function RecipePage() {
  let { id } = useParams()

  return (
    // <h1>Material UI to be used</h1>
    <h1>Individual Recipe Pge</h1>
    )
}
export default RecipePage
