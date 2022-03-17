import { React, useState } from "react"
import RichEditor from "../RichEditor"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import Switch from "@mui/material/Switch"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"
import axios from "axios"

/*
  
  return (
    <div>
      
      <ReadOnly initialValue={input} />
    </div>
*/
const defaultValues = {
  title: "",
  main: "",
  method: "",
  ingredients: "",
  cuisine: "Other",
  time: 0,
  spiciness: "Bland",
  serves: 0,
}

function RecipeForm() {
  const navigate = useNavigate()

  // Saves recipe making method in a json while preserving formating
  const [method, setMethod] = useState([
    {
      type: "paragraph",
      children: [
        { text: "Enter " },
        { text: "Recipe Details", bold: true },
        { text: " here, " },
        { text: " Be Sure to format it properly" },
        { text: "!" },
      ],
    },
  ])
  // Saves recipe ingredients in a json while preserving formating
  const [ingredients, setIngredients] = useState([
    {
      type: "paragraph",
      children: [
        { text: "Enter " },
        { text: "Recipe Details", bold: true },
        { text: " here, " },
        { text: " Be Sure to format it properly" },
        { text: "!" },
      ],
    },
  ])
  // saves all remaining values of the form in a json
  const [formValues, setFormValues] = useState(defaultValues)
  // saves Vegan and recipe drafting
  const [isVegan, setVegan] = useState(true)
  const [isDraft, setDraft] = useState(true)

  // Updates formValues state as user interacts with form
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post(
        "http://localhost:4000/api/v1/recipes",
        {
          recipe: {
            title: formValues.title,
            main: formValues.main,
            method: JSON.stringify(method),
            ingredients: JSON.stringify(ingredients),
            cuisine: formValues.cuisine,
            time: parseInt(formValues.time),
            vegan: isVegan,
            spiciness: formValues.spiciness,
            serving: parseInt(formValues.serves),
            isdraft: isDraft,
            username: JSON.parse(document.cookie).username,
          },
        },
        {
          headers: {
            Authorization: JSON.parse(document.cookie).auth,
          },
        }
      )
      .then(() => {
        navigate("/")
      })
  }
  return (
    <form onSubmit={handleSubmit}>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "80vw",
          m: "auto",
          p: "2em",
          backgroundColor: "rgba(223, 230, 233,0.2)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              id="title-input"
              name="title"
              label="Title"
              type="text"
              value={formValues.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="main-input"
              name="main"
              label="Main Ingredient"
              type="text"
              value={formValues.main}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="time-input"
              name="time"
              label="Time Required"
              type="text"
              value={formValues.time}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <FormControl>
              <Select
                name="cuisine"
                label="cuisine"
                value={formValues.cuisine}
                onChange={handleInputChange}
              >
                <MenuItem key="indian" value="Indian">
                  Indian
                </MenuItem>
                <MenuItem key="chinese" value="Chinese">
                  Chinese
                </MenuItem>
                <MenuItem key="italian " value="Italian">
                  Italian
                </MenuItem>
                <MenuItem key="french " value="French">
                  French
                </MenuItem>
                <MenuItem key="greek " value="Greek">
                  Greek
                </MenuItem>
                <MenuItem key="mexican " value="Mexican">
                  Mexican
                </MenuItem>
                <MenuItem key="middle-eastern " value="Middle Eastern">
                  Middle Eastern
                </MenuItem>
                <MenuItem key="japanese " value="Japanese">
                  Japanese
                </MenuItem>
                <MenuItem key="korean " value="Korean">
                  Korean
                </MenuItem>
                <MenuItem key="other " value="Other">
                  Other
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <Select
                name="spiciness"
                value={formValues.spiciness}
                onChange={handleInputChange}
              >
                <MenuItem key="bland" value="Bland">
                  Bland
                </MenuItem>
                <MenuItem key="mild" value="Mild">
                  Mild
                </MenuItem>
                <MenuItem key="hot " value="Hot">
                  Hot
                </MenuItem>
                <MenuItem key="super hot " value="Super Hot">
                  Super Hot
                </MenuItem>
                <MenuItem key="dangerous" value="Dangerous">
                  Dangerous
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              id="servin-input"
              name="serves"
              label="Serves"
              type="text"
              value={formValues.serves}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Non Vegan</Typography>
              <Switch
                checked={isVegan}
                onChange={(event) => {
                  setVegan(event.target.checked)
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Vegan</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <RichEditor value={ingredients} setValue={setIngredients} />
          </Grid>
          <Grid item xs={12}>
            <RichEditor value={method} setValue={setMethod} />
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Publish</Typography>
              <Switch
                checked={isDraft}
                onChange={(event) => {
                  setDraft(event.target.checked)
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Draft</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  )
}

export default RecipeForm
