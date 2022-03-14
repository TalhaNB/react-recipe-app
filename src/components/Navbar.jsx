import React from "react"
import { Link } from "react-router-dom"
import "../css/Navbar.css"

function Navbar(props) {
  const logout = () => {
    document.cookie = JSON.stringify({
      username: "",
      logged_in: false,
      auth: "",
    })
    props.setLoggedIn(false)
  }
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
          {props.loginState ? (
            <li>
              <Link to="/recipes/new">Submit Recipe</Link>
            </li>
          ) : (
            ""
          )}
          <li>
            {props.loginState ? (
              <Link to={"/profile/" + JSON.parse(document.cookie).username}>
                My Account
              </Link>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
          </li>
          {props.loginState ? (
            <li>
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span>☰</span>
      </label>
    </header>
  )
}

export default Navbar
