import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import RecipeForm from "./components/RecipeForm"
import { useEffect, useState } from "react"
import Profile from "./components/Profile"
import SignUpInPage from "./components/SignUpInPage"
import Navbar from "./components/Navbar"
import Lost from "./components/Lost"
import RecipePage from "./components/RecipePage"
import axios from "axios"

function App() {
  const [logged_in, setLoggedIn] = useState(
    document.cookie && JSON.parse(document.cookie).logged_in
  );
  const [recipeData, setRecipeData] = useState([]);
  const cookie = document.cookie ? JSON.parse(document.cookie) : false;

  useEffect(() => {
    if (logged_in) {
      axios
        .get("http://localhost:4000/api/v1/recipes", {
          headers: {
            Authorization: cookie.auth,
          },
        })
        .then((res) => {
          setRecipeData(res.data)
        })
        .catch((error) => {
          console.error(error)
          console.log("Could not fetch???")
        })
    } else {
      axios
        .get("http://localhost:4000/api/v1/latest", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyOCIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTY0NzI2MzM1OCwiZXhwIjoxNjQ4NTU5MzU4LCJqdGkiOiI5YThlMWZmNi0zNWQ0LTQ0YTEtOGJlMi02MjI5YTZmMmQyNzMifQ.4n7-D2iiZyq4ol00G_F3SWxuZbV0qTLELDpLgdlhKD4",
          },
        })
        .then((res) => {
          console.dir(res)
          setRecipeData(res.data)
        })
        .catch((error) => {
          console.error(error)
          console.log("Could not fetch???")
        })
    }
  }, [logged_in]);

  return (
    <BrowserRouter>
      <Navbar loginState={logged_in} setLoggedIn={setLoggedIn} user={"talha"} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              title="The Best Place for Recipes"
              show="latest"
              recipeData={recipeData}
            />
          }
        />
        <Route
          path="/recipes"
          element={
            <Home title="User Submissions" show="all" recipeData={recipeData} />
          }
        />
        <Route path="/recipes/:id" element={<RecipePage />} />
        <Route
          path="/recipes/new"
          element={logged_in ? <RecipeForm /> : <Lost />}
        />
        <Route
          path="/profile/:username"
          element={logged_in ? <Profile /> : <Lost />}
        />
        <Route
          path="/login"
          element={<SignUpInPage setLoggedIn={setLoggedIn} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
