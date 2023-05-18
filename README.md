# Assignment - Task Board

This is a task board application designed using HTML draggable properties, along with Node.js, Express.js, React, and PostgreSQL with Sequelize module for the database. The application allows users to manage their tasks by creating lists, dragging tasks between lists, marking tasks as completed, and providing horizontal scrolling for multiple lists.

## Features

1. **User Authentication**: Users can log in to the task board using their unique ID and password. The credentials are stored securely in the database.

2. **Multiple Lists**: Users can create multiple lists to organize their tasks. Each list is saved in the database and can be accessed and modified by the user.

3. **Drag and Drop**: Users can drag tasks from one list to another using HTML draggable properties. The application tracks and saves the changes to the task's list ID in the database.

4. **Database Integration**: The application utilizes PostgreSQL as the database and interacts with it using the Sequelize node module. List and task data is persisted in the database to ensure data integrity and availability across sessions.

5. **Horizontal Scrolling**: Users can scroll through multiple lists horizontally, providing an intuitive and convenient way to view and manage tasks.

6. **Task Completion**: Users can mark tasks as completed. When a task is marked as completed, it is automatically removed from the list. The change is reflected in the database, ensuring consistent task management.

## Prerequisites

To run this application locally, you need to have the following software installed:

- Node.js (version 12 or higher)
- PostgreSQL (version 9.6 or higher)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ui-vivek/Ascend-capital
   
2. Navigate to the project directory:
   ```bash
   cd task-board
   
3. Install the dependencies:
    ```bash
   npm install
  
Technology Stack
The technology stack used in this project includes:

Front-end:

React (JavaScript library for building user interfaces)
HTML5 (for structuring the web pages)
CSS3 (for styling the web pages)
JavaScript (for interactivity and logic implementation)
Back-end:

Node.js (JavaScript runtime)
Express.js (web application framework)
mongoDB
Sequelize (Node.js ORM for database operations)
Folder Structure
The project follows a standard folder structure:

config: Contains configuration files for the database and server.
migrations: Contains database migration files.
models: Contains Sequelize models for the database tables.
routes: Contains Express.js routes for handling API requests.
public: Contains the static assets (HTML, CSS, JavaScript) for the client-side.
views: Contains the server-side views (if applicable).
controllers: Contains the business logic for handling requests.
utils: Contains utility functions or modules.
app.js: Main entry point for the server-side application.
package.json: Contains project metadata and dependencies.
README.md: Documentation file (you're currently reading it).
License
This project is licensed under the MIT License.

Feel free to modify and adapt it to your needs.
