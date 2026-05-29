const express = require('express')
const router = express.Router()
const Workout=require('../models/workoutModel');
const { createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout } = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)
router.get('/',getWorkouts);
router.get('/:id',getWorkout);
router.post('/',createWorkout);
router.delete('/:id',deleteWorkout);
router.patch('/:id',updateWorkout);
module.exports=router;