
#  Workout Buddy App

Workout Buddy is a full-stack MERN application that helps users track their daily workouts in a simple and organized way.  
Users can create an account, log in, and manage their workouts securely.


##  Features

- User signup and login with authentication
- Add new workouts
- View all workouts (user-specific)
- Delete workouts
- Update workouts
- Secure protected routes using JWT
- Persistent login using localStorage
- Clean and responsive UI

##  Tech Stack

Frontend:
- React.js
- Context API
- CSS

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- bcrypt.js

## Setup Instructions

### Clone the repository

git clone https://github.com/ayush99-ai/workout-buddy.git
cd workout-buddy


##  Backend Setup
cd backend
npm install

Create a .env file:
env
PORT=4000
MONGO_URI=mongodb connection string
SECRET=jwt secret

Run backend:

npm run dev

##  Frontend Setup

cd frontend
npm install
npm start


##  API Endpoints

Auth Routes:

* POST /api/user/signup → Create account
* POST /api/user/login → Login user

Workout Routes (Protected):

* GET /api/workouts → Get all workouts
* GET /api/workouts/:id → Get single workout
* POST /api/workouts → Create workout
* DELETE /api/workouts/:id → Delete workout
* PATCH /api/workouts/:id → Update workout

##  Author

Made by Ayush Pardeshi
GitHub: [https://github.com/ayush99-ai/]
