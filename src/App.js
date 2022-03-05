import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import RecipeForm from "./components/RecipeForm"
import { useState } from "react"
import Profile from "./components/Profile"
import SignUpInPage from "./components/SignUpInPage"
import Navbar from "./components/Navbar"

function App() {
  const [logged_in] = useState(false)
  const username = "Talha"
  const [data] = useState([
    {
      id: 1,
      user: "Talha",
      title: "Garlic Bread",
      method:
        "Fresh and flavorful, this homemade Garlic Bread is going to be the best garlic bread recipe you'll make. All you need are 5 ingredients!",
      time: "18",
      image:
        "https://spicecravings.com/wp-content/uploads/2021/09/Air-Fryer-Garlic-Bread-Featured.jpg",
      main: "Bread",
      cuisine: "Snack",
      isVegan: false,
    },
    {
      id: 2,
      user: "WhyAsk",
      title: "Garlic Bread 2",
      method:
        "Fresh and flavorful, this homemade Garlic Bread is going to be the best garlic bread recipe you'll make. All you need are 5 ingredients!",
      time: "18",
      image:
        "https://spicecravings.com/wp-content/uploads/2021/09/Air-Fryer-Garlic-Bread-Featured.jpg",
      main: "Bread",
      cuisine: "Snack",
      isVegan: false,
    },
  ])

  return (
    <BrowserRouter>
      <Navbar loginState={logged_in} user={username} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              title="The Best Place for Recipes"
              show="latest"
              recipeData={data}
            />
          }
        />
        <Route
          path="/recipes"
          element={
            <Home title="User Submissions" show="all" recipeData={data} />
          }
        />
        <Route path="/recipes/new" element={<RecipeForm />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/login" element={<SignUpInPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
