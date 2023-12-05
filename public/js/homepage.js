// JavaScript file for Home Page (homepage.js)
document.addEventListener('DOMContentLoaded', function() {
    const recipes = [
      { title: 'Chicken Parmesan', photo: 'chickenparmesan.jpg' },
      { title: 'Ice Cream Sundae', photo: 'icecreamsundae.jpg' },
      // Add more recipes as needed
    ];
  
    const recipeContainer = document.getElementById('recipeContainer');
  
    recipes.forEach(recipe => {
      const recipeElement = document.createElement('div');
      recipeElement.classList.add('recipe-item');
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = recipe.title;
  
      const photoElement = document.createElement('img');
      photoElement.src = recipe.photo;
      photoElement.alt = recipe.title;
  
      recipeElement.addEventListener('click', function() {
        window.location.href = `recipe.html?title=${encodeURIComponent(recipe.title)}`;
      });
  
      recipeElement.appendChild(titleElement);
      recipeElement.appendChild(photoElement);
      recipeContainer.appendChild(recipeElement);
    });
  
    const loginButton = document.getElementById('loginButton');
    const homeButton = document.getElementById('homeButton');
    const submitButton = document.getElementById('submitButton');
  
    // Add event listeners for navigation buttons
    loginButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'index.html';
    });
  
    homeButton.addEventListener('click', function(event) {
      event.preventDefault();
      // Already on the Home Page, so no action needed
      // You might implement a refresh or scroll to the top logic here
    });
  
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'submitrecipe.html';
    });
  });
  