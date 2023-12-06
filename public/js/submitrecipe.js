document.getElementById('submitRecipeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch('/submitrecipe', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Recipe submitted:', data);
    window.location.href = '/static/homepage.html';
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors, show error message, etc.
  });
});

