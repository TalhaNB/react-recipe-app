import * as React from "react"
import { useNavigate } from "react-router-dom"
import Card from "@mui/material/Card"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { red, green } from "@mui/material/colors"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import dateFormat from "dateformat"

function RecipeCard(props) {
  const navigate = useNavigate()
  const recipe = props.recipeData
  const handleClick = () => {
    navigate("/recipe/" + props.id + "/" + recipe.slug)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={recipe.vegan ? { bgcolor: red[500] } : { bgcolor: green[500] }}
            aria-label="recipe"
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <OpenInNewIcon />
          </IconButton>
        }
        title={recipe.title}
        subheader={dateFormat(recipe.created_at, "mmmm dS, yyyy")}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images-gmi-pmc.edge-generalmills.com/b57ee35f-bce2-4229-8bf5-19b97876a4cb.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2">
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            justifyContent="center"
            spacing={2}
          >
            <p>{recipe.cuisine}</p>
            <p>Prep Time: {recipe.time}</p>
            <p>{recipe.vegan ? "Vegan" : "Non-Vegan"}</p>
          </Stack>
        </Typography>
      </CardContent>
      <CardActions>
        <>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </>
      </CardActions>
    </Card>
  )
}

export default RecipeCard
