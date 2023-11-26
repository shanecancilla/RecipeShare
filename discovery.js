// Sample data (for demonstration purposes)
const recipes = [
    { title: 'Pasta Carbonara', ingredients: 'Pasta, eggs, bacon, cheese', instructions: 'Cook pasta, fry bacon, mix with eggs and cheese' },
    { title: 'Chocolate Cake', ingredients: 'Flour, sugar, cocoa powder, eggs', instructions: 'Mix ingredients, bake for 30 mins' },
    // Add more sample recipes as needed
  ];
  
  // Function to display recipes dynamically
  function displayRecipes() {
    const recipesContainer = document.getElementById('recipesContainer');
  
    recipesContainer.innerHTML = '';
  
    recipes.forEach(recipe => {
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('recipe');
      recipeDiv.innerHTML = `
        <h3>${recipe.title}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      `;
      recipesContainer.appendChild(recipeDiv);
    });
  }
  
  // Event listener for form submission
  document.getElementById('recipeForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form values
    const title = document.getElementById('recipeTitle').value;
    // Get other form fields for recipe details
  
    // Create a new recipe object
    const newRecipe = {
      title,
      // Add other fields here based on form input
    };
  
    recipes.push(newRecipe); // Add the new recipe to the array
  
    displayRecipes(); // Update the displayed recipes
    this.reset(); // Reset the form
  });
  
  // Display initial recipes when the page loads
  window.addEventListener('DOMContentLoaded', displayRecipes);
  