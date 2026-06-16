# Meshari Portfolio Website

A personal portfolio website developed using React and TypeScript as a final project for Frontend Web Development. The website showcases my professional background, technical skills, projects, resume, and contact information. It also includes a simple database-driven messaging system that demonstrates communication between a React frontend, a Node.js backend, and a SQLite database.

## Project Overview

The purpose of this project is to demonstrate the skills and technologies learned throughout the course, including component-based development, routing, state management, responsive design, data handling, and database integration.

The website is organized into multiple pages that allow visitors to learn more about my experience, view my projects, explore my technical skills, and submit messages through a contact form.

## Features

- Home page with portfolio introduction
- About page with personal and professional background
- Skills page displaying technical skills and categories
- Projects page displaying project information loaded from JSON files
- Resume page summarizing education, experience, and skills
- Contact page with contact information and message submission form
- Messages page for viewing submitted messages
- Responsive layout for different screen sizes
- Navigation using React Router
- Reusable React components
- JSON-based data management
- Ability to save messages to a SQLite database
- Ability to retrieve messages from the database
- Ability to delete messages from the database

## Technologies Used

### Frontend

- React
- TypeScript
- React Router
- CSS
- JSON

### Backend

- Node.js
- Express
- SQLite
- CORS

## Project Structure

```text
src/
├── components/
├── pages/
├── data/
├── styles/
├── App.tsx
└── main.tsx

server/
├── server.js
└── database.db
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd meshari-portfolio
```

Install frontend dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd server
npm install
```

## Run Frontend

Start the React development server:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## Run Backend

Navigate to the server folder:

```bash
cd server
```

Start the backend server:

```bash
node server.js
```

The backend will run on:

```text
http://localhost:5000
```

## Database Functionality

This project includes a simple message management system that demonstrates database integration with a web application.

Users can submit a message through the Contact page. The submitted data is sent to the Express backend and stored in a SQLite database.

The Messages page retrieves saved records from the database and displays them to the user. Messages can also be deleted through the interface.

### Supported Operations

- Create a new message
- Read existing messages
- Delete messages

## Learning Outcomes

This project demonstrates the following concepts:

- React component development
- TypeScript fundamentals
- Client-side routing
- Event handling
- Form processing
- State management
- JSON data handling
- Responsive web design
- REST API communication
- Backend development using Express
- SQLite database integration
- Create, Read, and Delete database operations

