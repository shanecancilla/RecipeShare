// JavaScript file for Recipe page (recipe.js)

document.addEventListener('DOMContentLoaded', function() {
    // Function to get URL parameters by name
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[[\]]/g, '\\$&');
      const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
  
    // Get the title of the recipe from URL parameters
    const recipeTitle = getParameterByName('title');
  
    // Replace these lines with actual logic to fetch recipe details from a database or server
    const recipeDetails = {
      title: recipeTitle,
      ingredients: 'Ingredient details for ' + recipeTitle,
      instructions: 'Instructions for ' + recipeTitle,
      image: 'imageURL/' + recipeTitle.toLowerCase().replace(/\s+/g, '-') + '.jpg'
    };
  
    // Display recipe details on the page
    const recipeTitleElement = document.getElementById('recipeTitle');
    const recipeIngredientsElement = document.getElementById('recipeIngredients');
    const recipeInstructionsElement = document.getElementById('recipeInstructions');
    const recipeImageElement = document.getElementById('recipeImage');
  
    recipeTitleElement.textContent = recipeDetails.title;
    recipeIngredientsElement.textContent = recipeDetails.ingredients;
    recipeInstructionsElement.textContent = recipeDetails.instructions;
    recipeImageElement.src = recipeDetails.image;
  });
  