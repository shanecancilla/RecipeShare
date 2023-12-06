// JavaScript file for Recipe page (recipe.js)

document.addEventListener('DOMContentLoaded', function() {
  const recipeDetailsContainer = document.getElementById('recipeDetails');

  // Get the recipe ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get('id');

  // Fetch details of the specific recipe based on the ID
  fetch(`/recipe/${recipeId}`)
    .then(response => response.json())
    .then(data => {
      const recipe = data.recipe;

      // Display the recipe details
      const titleElement = document.createElement('h2');
      titleElement.textContent = recipe.title;

      const photoElement = document.createElement('img');
      photoElement.src = recipe.photo;

      const mealTypeElement = document.createElement('p');
      mealTypeElement.textContent = recipe.mealType;


      const ingredientsElement = document.createElement('p');
      ingredientsElement.textContent = recipe.ingredients;

      const instructionsElement = document.createElement('p');
      instructionsElement.textContent = recipe.instructions;

      // Add other elements as needed to display recipe details

      recipeDetailsContainer.appendChild(titleElement);
      recipeDetailsContainer.appendChild(photoElement);
      recipeDetailsContainer.appendChild(mealTypeElement);
      recipeDetailsContainer.appendChild(ingredientsElement);
      recipeDetailsContainer.appendChild(instructionsElement);
      
      // Append other recipe details as required
    })
    .catch(error => {
      console.error('Error fetching recipe details:', error);
      // Handle errors, display error message, etc.
    });
});
