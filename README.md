# RecipeShare
A platform where users can post and share recipes. Employs HTML to create forms and display content, CSS to style pages and make them responsive, and JavaScript to handle form submission and display posted recipes dynamically. The data is being served with Node.js, and is being kept on a sqlite3 database.

## Installation instructions

### Clone the repo
```bash
git clone https://github.com/shanecancilla/RecipeShare.git
```

### Dependencies
#### Linux
```bash
# Install Node.js
sudo apt-get install -y nodejs
# Install npm
sudo apt install npm
# Install sqlite3
sudo apt install -y sqlite3
# Rebuild sqlite3
sudo npm rebuild sqlite3
```
#### Mac
```bash
# Install Node.js
brew install node
# Install npm
brew install npm
# Install sqlite3
brew install sqlite3
```
#### Windows
```bash
# Install Node.js
choco install node
# Install npm
choco install npm
# Install sqlite3
choco install sqlite3
```
## How to Run the Node.js Server
Enter the directory 'RecipeShare' and type in the following:
```bash
node app.js
```
This will serve the page on 'localhost:3000'. Type that into any browser on the machine to view the page!
