// JavaScript file for Submit Recipe page (submitrecipe.js)
document.addEventListener('DOMContentLoaded', function() {
  const submitRecipeForm = document.getElementById('submitRecipeForm');

  submitRecipeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const formData = new FormData(submitRecipeForm); // Gather form data

    // Send form data to the PHP script using fetch API
    fetch('save_recipe_db.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      console.log(data); // Logging the response for demonstration purposes
      // Optionally, perform further actions based on the response, like displaying a success message
    })
    .catch(error => {
      // Handle any errors that occur during the fetch request
      console.error('Error:', error);
    });

    // Redirect to Home Page after successful recipe submission (for demonstration)
    window.location.href = 'homepage.html';
  });
});
