// JavaScript file for Home Page (homepage.js)

document.addEventListener('DOMContentLoaded', function() {
    // Replace this array with your actual list of recipes (title, photo, etc.)
    const recipes = [
      { title: 'Recipe 1', photo: 'recipe1.jpg' },
      { title: 'Recipe 2', photo: 'recipe2.jpg' },
      // Add more recipes as needed
    ];
  
    const recipeContainer = document.getElementById('recipeContainer');
  
    // Display recipe titles and photos
    recipes.forEach(recipe => {
      const recipeElement = document.createElement('div');
      recipeElement.classList.add('recipe-item');
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = recipe.title;
  
      const photoElement = document.createElement('img');
      photoElement.src = recipe.photo;
      photoElement.alt = recipe.title;
  
      // Click event to view recipe details
      recipeElement.addEventListener('click', function() {
        // Redirect to Recipe Page with the selected recipe (Page 5)
        window.location.href = `recipe.html?title=${encodeURIComponent(recipe.title)}`;
      });
  
      recipeElement.appendChild(titleElement);
      recipeElement.appendChild(photoElement);
      recipeContainer.appendChild(recipeElement);
    });
  
    // Handle button clicks for navigation
    const loginButton = document.getElementById('loginButton');
    const homeButton = document.getElementById('homeButton');
    const submitButton = document.getElementById('submitButton');
  
    loginButton.addEventListener('click', function() {
      window.location.href = 'login.html';
    });
  
    homeButton.addEventListener('click', function() {
      // Already on the Home Page, so no action needed
      // You might implement a refresh or scroll to the top logic here
    });
  
    submitButton.addEventListener('click', function() {
      window.location.href = 'submitrecipe.html';
    });
  });
  