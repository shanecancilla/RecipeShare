document.addEventListener('DOMContentLoaded', function() {
  const recipeDetailsElement = document.getElementById('recipeDetails');

  // Get the recipe ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get('id');

  fetch(`/recipe/${recipeId}`)
    .then(response => response.json())
    .then(data => {
      const recipe = data.recipe;

      if (recipe) {
        // Display the recipe details
        const titleElement = document.createElement('h2');
        titleElement.textContent = recipe.title;

        const photoElement = document.createElement('img');
        photoElement.src = recipe.photo;

        const mealTypeElement = document.createElement('p');
        mealTypeElement.textContent = `Meal Type: ${recipe.mealType}`;

        const ingredientsElement = document.createElement('p');
        ingredientsElement.textContent = recipe.ingredients;

        const instructionsElement = document.createElement('p');
        instructionsElement.textContent = recipe.instructions;

        recipeDetailsElement.appendChild(titleElement);
        recipeDetailsElement.appendChild(photoElement);
        recipeDetailsElement.appendChild(mealTypeElement);
        recipeDetailsElement.appendChild(ingredientsElement);
        recipeDetailsElement.appendChild(instructionsElement);
      } else {
        const errorElement = document.createElement('p');
        errorElement.textContent = 'Recipe not found.';
        recipeDetailsElement.appendChild(errorElement);
      }
    })
    .catch(error => {
      console.error('Error fetching recipe:', error);
      // Handle errors, display error message, etc.
    });
});
