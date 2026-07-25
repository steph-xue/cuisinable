import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Meals(props) {

    // Set the initial state of getRecipes to false (to show the full recipe view)
    const [getRecipes, setGetRecipes] = useState(false);

    // Set the initial state of the full recipe view data to empty strings 
    const [imageURL, setImageURL] = useState("");
    const [imageTitle, setImageTitle] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imageRecipe, setImageRecipe] = useState("");
    const [imageIngredients, setImageIngredients] = useState("");

    // Function to strip HTML tags from a string returned by API
    function stripHtmlTags(text) {
        return text.replace(/<[^>]*>/g, '');
    }

    // Function to toggle the full recipe view
    function toggleRecipes(mealImage, mealTitle, mealDescription, mealRecipe, mealIngredients) {
        if (getRecipes) {
            setGetRecipes(false);
            setImageURL("");
            setImageTitle("");
            setImageDescription("");
            setImageRecipe("");
            setImageIngredients("");
        } else {
            setGetRecipes(true);
            setImageURL(mealImage);
            setImageTitle(mealTitle);
            setImageDescription(stripHtmlTags(mealDescription)); // Strips HTML tags
            setImageRecipe(mealRecipe);
            setImageIngredients(mealIngredients);
        }
    }

    // Map the recipes to individual meal elements
    const mealElements = props.recipes.map((meal, index) => {

        // Safely access the first instruction object if it exists
        const firstInstruction = meal.analyzedInstructions[0];
        
        // Render the recipe instructions and ingredients
        const recipeInstructions = firstInstruction ? (
            <div className="recipe-instructions" key={0}>
                <h3 className="recipe-instructions-title">Instructions</h3>
                <ol className="recipe-instructions-steps">
                    {firstInstruction.steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step.step}</li>
                    ))}
                </ol>
            </div>
        ) : null; // Return null if there is no instruction
    
        // Render the recipe ingredients
        const recipeIngredients = firstInstruction ? (() => {
            // Use a Set to store unique ingredient names (no duplicates)
            const uniqueIngredients = new Set();
    
            // Extract ingredients from the steps of the first instruction
            firstInstruction.steps.forEach((step) => {
                step.ingredients.forEach((ingredient) => {
                    uniqueIngredients.add(ingredient.name);
                });
            });
    
            // Convert the Set to an array of JSX list items
            const ingredients = Array.from(uniqueIngredients).map((ingredient, ingredientIndex) => (
                <li className="ingredient" key={ingredientIndex}>{ingredient}</li>
            ));
            
            // Render the ingredients list
            return (
                <div key={0} className="recipe-ingredients">
                    <h3 className="recipe-ingredients-title">Ingredients</h3>
                    <ul className="recipe-ingredients-list">
                        <div className="recipe-ingredients-list-box">
                            {ingredients}
                        </div>
                    </ul>
                </div>
            );
        })() : null; // Return null if there is no instruction
        
        // Render the meal card
        return (
            <div key={index} className="meal-card" onClick={() => toggleRecipes(meal.image, meal.title, meal.summary, recipeInstructions, recipeIngredients)}>
                <img className="meal-image" src={meal.image} alt={meal.title} />
                <h2 className="meal-title">{meal.title}</h2>
            </div>
        );
    });

    // Render the meals page
    return (
        <div className="meals-page">
            <h1 className="meals-title">Recipes tailored to you</h1>

            {/* Show the meal cards */}
            <div className="meal-container">
                {mealElements}
            </div>

            {/* Button to change cuisine */}
            <button className="button" onClick={props.getStarted}>Change Cuisine</button>

            {/* Show the full recipe view when meal is clicked on */}
            {
                getRecipes &&
                <div className="full-recipe-container">
                    <FontAwesomeIcon className="close-icon" icon={faCircleXmark} onClick={() => toggleRecipes()} />
                    <div className="recipe-container">
                        <div className="recipe-container-1">
                            <img src={imageURL} alt="full-image" className="full-image" />
                            <p className="full-image-ingredients">{imageIngredients}</p>
                        </div>
                        <div className="recipe-container-2">
                            <p className="full-image-title">{imageTitle}</p>
                            <p className="full-image-description">{imageDescription}</p>
                            <div className="full-image-recipe">{imageRecipe}</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

Meals.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      summary: PropTypes.string,
      analyzedInstructions: PropTypes.arrayOf(
        PropTypes.shape({
          steps: PropTypes.arrayOf(
            PropTypes.shape({
              step: PropTypes.string,
              ingredients: PropTypes.arrayOf(
                PropTypes.shape({
                  name: PropTypes.string,
                })
              ),
            })
          ),
        })
      ),
    })
  ).isRequired,
  getStarted: PropTypes.func.isRequired,
};

export default Meals;