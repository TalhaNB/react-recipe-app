import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../css/Login.css"
import axios from "axios"

function SignUpInPage(props) {
  // This allow to update value of "email" and "password" as user types it
  const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (e) => {
      setValue(e.target.value)
    }
    return {
      value,
      onChange: handleChange,
    }
  }
  // "email", "password" are temp variables to allow passing the value back to the user state || navigate is a hook being used to redirec to home page on successfull signup
  const navigate = useNavigate()
  const email = useFormInput("")
  const password = useFormInput("")
  const username = useFormInput("")
  const handleSignUp = () => {
    axios
      .post(`http://localhost:4000/users`, {
        user: {
          username: username.value,
          email: email.value,
          password: password.value,
        },
      })
      .then(() => {
        navigate("/")
      })
  }
  const handleLogin = async () => {
    // Send a Request to API and get AUTH Key
    await axios
      .post(`http://localhost:4000/users/sign_in`, {
        user: { email: email.value, password: password.value },
      })
      .then((res) => {
        // Saving Login status, auth and username to maintain user session even after browser reopened.
        document.cookie = JSON.stringify({
          username: res.data.message,
          logged_in: true,
          auth: res.headers.authorization,
        })
        props.setLoggedIn(true)
      })
      .catch(function (error) {
        console.log(error.message)
      })
    if (JSON.parse(document.cookie).logged_in) {
      // Redirect to home
      navigate("/")
    } else {
      document.getElementById("error").style.display = "block"
    }
  }
  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center mt-5 py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          <input
                            type="email"
                            {...email}
                            name="logemail"
                            className="form-style"
                            placeholder="Email"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            {...password}
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <p className="mb-0 mt-4 text-center" id="error">
                          Invalid Credentials
                        </p>
                        <a href="#" onClick={handleLogin} className="btn mt-4">
                          submit
                        </a>
                        <p className="mb-0 mt-4 text-center">
                          <a href="#0" className="link">
                            Forgot your password?
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <div className="form-group">
                          <input
                            type="text"
                            {...username}
                            name="logname"
                            className="form-style"
                            placeholder="Username"
                            id="logname"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-user"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="email"
                            {...email}
                            name="logemail"
                            className="form-style"
                            placeholder="Your Email"
                            id="logemail"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            {...password}
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" onClick={handleSignUp} className="btn mt-4">
                          submit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpInPage
