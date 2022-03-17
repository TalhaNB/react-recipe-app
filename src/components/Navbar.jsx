import React from "react"
import { Link } from "react-router-dom"

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
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        {props.loginState && (
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
              <Link to={"/profile/" + JSON.parse(document.cookie).username}>
                My Account
              </Link>
            </li>
            <li>
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
        )}
        {!props.loginState && (
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/login">Sign Up</Link>
            </li>
          </ul>
        )}
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span>☰</span>
      </label>
    </header>
  )
}

export default Navbar
