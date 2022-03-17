import { React, useState } from "react"
import { useParams } from "react-router-dom"
import ReadOnly from "../ReadOnly"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Divider from "@mui/material/Divider"
import CardContent from "@mui/material/CardContent"

function RecipePage(props) {
  let { key } = useParams()
  const [recipeData] = useState(props.fetchRecipe(key))
  console.log(recipeData)
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      p={5}
      sx={{ maxWidth: "80vw", margin: "auto" }}
    >
      <Grid item>
        <Typography
          variant="h4"
          component="div"
          textAlign="left"
          mb={0}
          gutterBottom
        >
          {recipeData.title}
        </Typography>
        <Typography
          variant="caption"
          component="div"
          textAlign="left"
          gutterBottom
        >
          by: {JSON.parse(document.cookie).username} | Updated:
          {recipeData.updated_at}
        </Typography>
      </Grid>
      <Grid item>
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{
              maxWidth: "80%",
              p: "1em",
            }}
            image="https://images-gmi-pmc.edge-generalmills.com/b57ee35f-bce2-4229-8bf5-19b97876a4cb.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Stack
              direction="column"
              divider={<Divider orientation="vertical" flexItem />}
              justifyContent="center"
              spacing={1}
            >
              <Typography variant="subtitle2">
                Cuisine: {recipeData.cuisine}
              </Typography>
              <Divider />
              <Typography variant="subtitle2">
                Prep Time: {recipeData.time}
              </Typography>
              <Divider />
              <Typography variant="subtitle2">
                Theme: {recipeData.main}
              </Typography>
              <Divider />
              <Typography variant="subtitle2">
                Serves: {recipeData.serving}
              </Typography>
              <Divider />
              <Typography variant="subtitle2">
                Spiciness: {recipeData.spiciness}
              </Typography>
              <Divider />
              <Typography variant="subtitle2">
                {recipeData.vegan ? "Vegan" : "Non-Vegan"}
              </Typography>
              <Divider />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="top"
          height={"50vh"}
          sx={{
            mt: "10%",
          }}
        >
          <Grid itemxs={12} sm={12} md={4} lg={4} xl={4} border="1px solid">
            <Typography
              variant="h4"
              component="div"
              textAlign="center"
              gutterBottom
            >
              Ingredients
            </Typography>
            <ReadOnly initialValue={JSON.parse(recipeData.ingredients)} />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8} border="1px solid">
            <Typography
              variant="h4"
              component="div"
              textAlign="center"
              gutterBottom
            >
              Method
            </Typography>
            <ReadOnly initialValue={JSON.parse(recipeData.method)} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default RecipePage
