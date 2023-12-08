// JavaScript file for Home Page (homepage.js)
document.addEventListener('DOMContentLoaded', function() {
  const recipeContainer = document.getElementById('recipeContainer');

  // Fetch recipes from the backend API
  fetch('/recipes')
    .then(response => response.json())
    .then(data => {
      const recipes = data.recipes;

      // Loop through the recipes and create HTML elements to display them
      recipes.forEach(recipe => {
        // Create a recipe card
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe-item');

        const titleElement = document.createElement('h2');
        titleElement.textContent = recipe.title;

        const photoElement = document.createElement('img');
        photoElement.src = recipe.photo; // Assuming 'photo' is the URL for the recipe image
        photoElement.alt = recipe.title;

        recipeElement.addEventListener('click', function() {
          // Handle click event for a recipe item, e.g., redirect to recipe details page
          window.location.href = `/static/recipe.html?id=${recipe.id}`; //change this to recipe id
        });
        
        //append to the card the title and the photo
        recipeElement.appendChild(titleElement);
        recipeElement.appendChild(photoElement);
        //append to the list, a card
        recipeContainer.appendChild(recipeElement);

      });
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
      // Handle errors, display error message, etc.
    });


  const loginButton = document.getElementById('loginButton');
  const homeButton = document.getElementById('homeButton');
  const submitButton = document.getElementById('submitButton');

  // Add event listeners for navigation buttons
  loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/static/index.html';
  });
  
  homeButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Already on the Home Page, so no action needed
    // You might implement a refresh or scroll to the top logic here
  });
  
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/static/submitrecipe.html';
  });
});
  