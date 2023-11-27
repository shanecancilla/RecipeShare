// JavaScript file for Submit Recipe page (submitrecipe.js)

document.addEventListener('DOMContentLoaded', function() {
    const submitRecipeForm = document.getElementById('submitRecipeForm');
  
    submitRecipeForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the default form submission
  
      // Get input values from the form
      const recipeTitle = document.getElementById('recipeTitle').value;
      const recipeIngredients = document.getElementById('recipeIngredients').value;
      const recipeInstructions = document.getElementById('recipeInstructions').value;
      const recipeImage = document.getElementById('recipeImage').value; // Assuming file input
  
      // Create a new recipe object with the entered details
      const newRecipe = {
        title: recipeTitle,
        ingredients: recipeIngredients,
        instructions: recipeInstructions,
        image: recipeImage
      };
  
      // Simulate appending the new recipe to a list (replace this with your logic)
      // Here, we're just logging the new recipe details
      console.log('New Recipe:', newRecipe);
  
      // Optionally, you can store the new recipe in an array or send it to a server
  
      // Redirect to Home Page after successful recipe submission
      window.location.href = 'homepage.html';
    });
  });
  