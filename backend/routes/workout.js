const app=require('express');
const router=app.Router();
const Workout=require('../models/workoutModel');
const { createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout } = require('../controllers/workoutController');

router.get('/',getWorkouts);
router.get('/:id',getWorkout);
router.post('/',createWorkout);
router.delete('/:id',deleteWorkout);
router.patch('/:id',updateWorkout);
module.exports=router;