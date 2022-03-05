import React from "react"
import { useParams } from "react-router-dom"

function Profile(props) {
  let { username } = useParams()
  return (
    <div>
      <h1>{username}'s Profile</h1>
    </div>
  )
}

export default Profile
