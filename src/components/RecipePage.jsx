import React from "react"
import { useParams } from "react-router-dom"
import ReadOnly from "../ReadOnly"

function RecipePage(props) {
  let { id } = useParams()
  console.log(window.sessionStorage.getItem("recipe"))
  return (
    // <h1>Material UI to be used</h1>
    <>
      <h1>Individual Recipe Pge</h1>
      <ReadOnly
        initialValue={JSON.parse(window.sessionStorage.getItem("recipe"))}
      />
    </>
  )
}
export default RecipePage
