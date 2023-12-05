document.addEventListener('DOMContentLoaded', function() {
  const submitRecipeForm = document.getElementById('submitRecipeForm');

  submitRecipeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const recipeTitle = document.getElementById('recipeTitle').value;
    const recipeIngredients = document.getElementById('ingredients').value;
    const recipeInstructions = document.getElementById('instructions').value;
    const mealType = document.getElementById('mealType').value;
    const imageUpload = document.getElementById('imageUpload').files[0];

    // Here, you might store the image in a server and get its URL to use

    // Prepare recipe object
    const newRecipe = {
      title: recipeTitle,
      photo: 'image_url_here', // Replace 'image_url_here' with the actual image URL
      ingredients: recipeIngredients,
      instructions: recipeInstructions,
      mealType: mealType
    };

    // Save the new recipe to localStorage
    let storedRecipes = localStorage.getItem('submittedRecipes');
    let submittedRecipes = storedRecipes ? JSON.parse(storedRecipes) : [];
    submittedRecipes.push(newRecipe);
    localStorage.setItem('submittedRecipes', JSON.stringify(submittedRecipes));

    // Trigger a custom event to inform the homepage that a new recipe has been added
    const newRecipeEvent = new Event('newRecipeSubmitted');
    document.dispatchEvent(newRecipeEvent);

    // Redirect to Home Page after successful recipe submission (for demonstration)
    window.location.href = 'homepage.html';
  });
});
