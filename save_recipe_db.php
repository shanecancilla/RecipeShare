<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data sent via POST request
    $recipeTitle = $_POST['recipeTitle'] ?? '';
    $recipeIngredients = $_POST['recipeIngredients'] ?? '';
    $recipeInstructions = $_POST['recipeInstructions'] ?? '';
    $mealType = $_POST['mealType'] ?? '';
    // Handling file upload (assuming image is stored in the filesystem and the path is stored in the database)
    $imageFilename = ''; // Empty string by default

    if (!empty($_FILES['recipeImage']) && $_FILES['recipeImage']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'images/'; // Directory to store uploaded images
        $uploadedFile = $_FILES['recipeImage'];
        $imageFilename = $uploadDir . basename($uploadedFile['name']); // Generating filename

        // Move uploaded image to the uploads directory
        move_uploaded_file($uploadedFile['tmp_name'], $imageFilename);
    }

    // Database connection settings (Modify these with your actual database credentials)
    $servername = "localhost";
    $username = "recipeuser";
    $password = "recipetime";
    $dbname = "recipe_database"; // Replace with your database name

    // Create connection to MySQL database
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // SQL query to insert recipe details into the Recipes table
    $sql = "INSERT INTO Recipes (recipe_title, recipe_ingredients, recipe_instructions, meal_type, image_filename)
    VALUES ('$recipeTitle', '$recipeIngredients', '$recipeInstructions', '$mealType', '$imageFilename')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true, 'message' => 'Recipe information saved successfully.']);
    } else {
        echo json_encode(['error' => 'Error: ' . $conn->error]);
    }

    // Close database connection
    $conn->close();
} else {
    // Handle the case where the script is accessed via GET request or other methods
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method Not Allowed']);
}
?>
