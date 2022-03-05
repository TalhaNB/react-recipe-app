import React from "react"
import { Link } from "react-router-dom"
import "../css/Navbar.css"

function Navbar(params) {
  return (
    <header>
      <h1>Logo</h1>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/recipes/new">Submit Recipe</Link>
          </li>
          <li>
            {params.loginState ? (
              <Link to={"/profile/" + params.user}>My Account</Link>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
          </li>
        </ul>
      </nav>
      <label for="nav-toggle" className="nav-toggle-label">
        <span>☰</span>
      </label>
    </header>
  )
}

export default Navbar
