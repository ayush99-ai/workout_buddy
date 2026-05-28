# Workout Tracker App

A simple full-stack Workout Tracker application built using the MERN stack.
Users can create, view, and delete workout records with a clean and responsive UI.
## Features

* Add new workouts
* View all workouts
* Delete workouts
* Responsive design
* MongoDB database connection

## Tech Stack

### Frontend

* React.js
* CSS
* Context API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Folder Structure

AyushPardeshi_task(37)

 backend/
    controllers/
    models/
    routes/
    server.js
    package.json

frontend/
src/
    components/
    pages/
    package.json
    index.css
    app.js


## Installation

### Clone the Repository

```bash
git clone <your-github-repo-link>
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

Run backend server:

```bash
npm run dev
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm start
```

or

```bash
npm run dev
```

---

## API Endpoints

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/workouts     | Get all workouts |
| POST   | /api/workouts     | Create a workout |
| DELETE | /api/workouts/:id | Delete a workout |

---

## Deployment

### Frontend

Deploy using:

* Netlify
* Vercel

### Backend

Deploy using:

* Render

---

## Screenshots

Add screenshots of your project here.

---

## Future Improvements

* Update/Edit workouts
* User authentication
* Dark mode
* Search and filter workouts

---

## Author

Ayush Pardeshi
