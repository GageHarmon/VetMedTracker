## README
This is a React application that uses a db.json to display and manage a list of dogs and their medical treatment doses. The application includes three main components: HomePage, DosePage, and NotesPage, which can be accessed by the navigation bar at the top of the screen. There is also a list of dogs on both the NotesPage and DosePage, along with a search bar to selected a specifc dog and open the forms.

The HomePage component only renders a Header component.

The DosePage component displays all dogs or the selected dog, depending on whether the user has selected a dog or not. When the user selects a dog, it shows that dog's medical treatment dose and a form to submit a new dose.

The NotesPage component displays display all dogs or the selected dog, depending on whether the user has selected a dog or not. When the user selects a dog, it shows that dog's notes, description, and a form to update the notes and desc..

## Getting Started
To get started with this application, first clone the repository to your local machine. In the project directory, run:

## npm install
This will install all the required dependencies.

## npm start
This will start the application in development mode. Open http://localhost:3000 to view it in the browser.

## Dependencies
This application has the following dependencies:
react
react-dom
react-router-dom
react-responsive-carousel

## Database
The database used in this application is a JSON file located at 
http://localhost:3000/dogs and http://localhost:3000/dose.

## Contributing
If you find any issues or have suggestions for improvement, please feel free to reach out or submit a pull request.

## Acknowledgments 
Animista and Material UI. MDN and ChatGPT for general knowledge and code adjustment.