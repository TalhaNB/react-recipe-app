import React from "react"
import "../css/RecipeForm.css"

function RecipeForm() {
  return (
    <div className="wrapper form">
      <form method="post">
        <input
          type="hidden"
          name="authenticity_token"
          value="mCydi42mNBwPil6rk6j8vgLZKEQ0zDIH7hTqKJlEsFBFc6u8nPo_6HHe1qXlQYzDfl3zEOfEu1eCxCuDDR1oVQ"
        />
        <div>
          <label htmlFor="recipe_Title">Title</label> &nbsp;
          <input
            placeholder="Title of Recipe"
            type="text"
            name="recipe[name]"
            id="recipe_name"
          />
        </div>
        <div className="mini-flex">
          <div>
            <label htmlFor="recipe_main_ingredient">Main ingredient</label>{" "}
            &nbsp;
            <input
              placeholder="What is the main ingredient?"
              type="text"
              name="recipe[main_ingredient]"
              id="recipe_main_ingredient"
            />
          </div>
          <div>
            <label htmlFor="recipe_time">Time</label> &nbsp;
            <input
              placeholder="Minutes"
              type="text"
              name="recipe[time_required]"
              id="recipe_time_required"
            />
          </div>
          <div>
            <label htmlFor="recipe_cuisine">Cuisine</label> &nbsp;
            <select name="recipe[cuisine]" id="recipe_cuisine">
              <option value="Other">Other</option>
              <option value="Breakfast">Breakfast</option>
              <option value="BBQ">BBQ</option>
              <option value="Desert">Desert</option>
              <option value="Continental">Continental</option>
              <option value="Snack">Snack</option>
              <option value="Spanish Food">Spanish Food</option>
              <option value="Thai Food">Thai Food</option>
              <option value="Japanese Food">Japanese Food</option>
              <option value="Chinese Food">Chinese Food</option>
              <option value="Indian Food">Indian Food</option>
              <option value="Hawaiian Food">Hawaiian Food</option>
              <option value="Middle Eastern Food">Middle Eastern Food</option>
              <option value="Korean Food">Korean Food</option>
              <option value="Fast Food">Fast Food</option>
            </select>
          </div>
          <div>
            <label htmlFor="recipe_spiciness">Spiciness</label>
            <select name="recipe[spiciness_level]" id="recipe_spiciness_level">
              <option value="Bland">Bland</option>
              <option value="Normal">Normal</option>
              <option value="Mild">Mild</option>
              <option value="Spicy">Spicy</option>
              <option value="Dangerous">Dangerous</option>
            </select>
          </div>
        </div>
        <div className="mini-flex"></div>
        <div>
          <label htmlFor="recipe_ingredients">Ingredients</label>
          <textarea id="recipe_ingredients" name="editor"></textarea>
        </div>
        <div>
          <label htmlFor="recipe_recipe">Recipe</label>
          <textarea id="recipe_recipe" name="editor"></textarea>
        </div>
        <div className="mini-flex">
          <div>
            <label htmlFor="recipe_cover">Cover</label>
            <input type="file" name="recipe[photo]" id="recipe_photo" />
          </div>
          <div>
            <label htmlFor="recipe_gallery">Gallery</label>
            <input
              multiple="multiple"
              type="file"
              name="recipe[images][]"
              id="recipe_images"
            />
          </div>
          <div>
            <label htmlFor="recipe_video">Video</label>
            <input type="file" name="recipe[video]" id="recipe_video" />
          </div>
        </div>
        <div className="mini-flex">
          <input
            type="submit"
            name="commit"
            value="Save"
            className="plain-btn"
            data-disable-with="Save"
          />
          <br />
          <a className="plain-btn" href="/recipes">
            Cancel
          </a>
        </div>
      </form>
    </div>
  )
}

export default RecipeForm
