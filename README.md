# To-Do List App
A simple full-stack to-do list application built with React on the frontend and Spring Boot on the backend.

# Features
- Add new tasks
- Delete tasks
- Mark tasks as completed (toggle)
- Data persistence with backend REST API
- Responsive UI with a clean table layout

# Technologies Used
- Frontend: React, JavaScript, CSS
- Backend: Spring Boot, Java, REST API
- Development Tools: Vite (for React), Maven (for Spring Boot)

# Getting Started
## Prerequisites
- Java 11+
- Node.js & npm
- Maven
- (Optional) IDE such as VS Code, IntelliJ IDEA


# Installation & Running Locally
## 1. Clone the repository
git clone https://github.com/DevineC45/ToDo-App.git
cd ToDo-App

## 2. Run the backend
cd todo/todo
mvn spring-boot:run
This will start the backend server on http://localhost:8080.

## 3. Run the frontend
Open a new terminal window/tab:
cd frontend
npm install
npm run dev

This will start the frontend on http://localhost:5173.


# Usage
- Open your browser to http://localhost:5173
- Add tasks via the input form
- Toggle completion by clicking the checkbox
- Delete tasks using the delete button
- All changes sync with the backend database

# Future Improvements
- User authentication and individual user task lists
- Better styling and UI animations
- Pagination or filtering of tasks
- Deploy backend and frontend to cloud platforms
