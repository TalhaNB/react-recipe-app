import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Input from "@mui/material/Input"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"

function SignUpInPage(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()
  const [loginFailed, setLoginFailed] = useState(false)
  const [signUpFailed, setSignUpFailed] = useState("")
  const navigate = useNavigate()

  const handleSignUp = () => {
    axios
      .post(`http://localhost:4000/users`, {
        user: {
          username: username,
          email: email,
          password: password,
        },
      })
      .then((res) => {
        if (res.data.message === "Sign Up Failed") {
          setSignUpFailed(res.data.errors[0])
        } else {
          navigate("/")
        }
      })
  }

  const handleLogin = async () => {
    // Send a Request to API and get AUTH Key
    await axios
      .post(`http://localhost:4000/users/sign_in`, {
        user: { email: email, password: password },
      })
      .then((res) => {
        // Saving Login status, auth and username to maintain user session even after browser reopened.
        document.cookie = JSON.stringify({
          username: res.data.message,
          logged_in: true,
          auth: res.headers.authorization,
        })
        props.setLoggedIn(true)
        navigate("/")
      })
      .catch(function (error) {
        setLoginFailed(true)
      })
  }
  return (
    <Paper elevation={3}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        height={"50vh"}
      >
        <Grid item xs={5}>
          <Grid container direction="column" spacing={3} alignItems="center">
            <Grid item>
              <Typography variant="h5" gutterBottom component="div">
                Login
              </Typography>
            </Grid>
            {loginFailed && (
              <Grid item>
                <Typography
                  variant="caption"
                  display="block"
                  color="red"
                  gutterBottom
                >
                  Invalid Credentials
                </Typography>
              </Grid>
            )}
            <Grid item>
              <FormControl variant="standard">
                <InputLabel htmlFor="email">Name</InputLabel>
                <Input
                  id="email"
                  onChange={(e) => {
                    setEmail(e.currentTarget.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl variant="standard">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.currentTarget.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleLogin}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem>
          OR
        </Divider>
        <Grid item xs={5}>
          <Grid container direction="column" spacing={3} alignItems="center">
            <Grid item>
              <Typography variant="h5" gutterBottom component="div">
                Sign Up
              </Typography>
            </Grid>
            <Grid item>
              {signUpFailed && (
                <Grid item>
                  <Typography
                    variant="caption"
                    display="block"
                    color="red"
                    gutterBottom
                  >
                    {signUpFailed}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Grid item>
              <FormControl variant="standard">
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  onChange={(e) => {
                    setUsername(e.currentTarget.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl variant="standard">
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  onChange={(e) => {
                    setEmail(e.currentTarget.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl variant="standard">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.currentTarget.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleSignUp}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default SignUpInPage
