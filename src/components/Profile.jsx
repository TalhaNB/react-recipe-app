import React from "react"
import { useParams } from "react-router-dom"

function Profile() {
  let { username } = useParams()

  return (
    <div className="wrapper">
      <h1>{username}'s Profile</h1>
    </div>
  )
}

export default Profile
