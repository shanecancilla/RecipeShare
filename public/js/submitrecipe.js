document.getElementById('submitRecipeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the file input element
  const fileInput = document.getElementById('imageUpload');
  
  // Extract the filename from the file input
  const imageFilename = fileInput.files[0].name;
  
  // Create a FormData object and append other form data along with the image filename
  const formData = new FormData(this);
  formData.append('imageFilename', imageFilename);

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

