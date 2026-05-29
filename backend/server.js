const express= require('express');
const dotenv = require('dotenv');
const workoutRoutes = require('./routes/workout');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')
dotenv.config();

const app = express();
//middleware
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path}`);
    next();
});
app.use(express.json());
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.json('Hello World!');
});
app.use('/api/workouts', workoutRoutes);
app.use('/api/User', userRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});