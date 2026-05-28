const Workout=require('../models/workoutModel');
const mongoose=require('mongoose');
//get all workouts
module.exports.getWorkouts=async(req,res)=>{
        const workouts=await Workout.find({}).sort({createdAt:-1});
        res.status(200).json(workouts);
    }

//get a single workout
module.exports.getWorkout=async(req,res)=>{  
        const{id}=req.params;
        const workout=await Workout.findById(id);
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'No such workout'});
        }
        res.status(200).json(workout);
    }

//create a new workout 
module.exports.createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  let emptyFields = [];

  if (!title) emptyFields.push('title');
  if (!reps) emptyFields.push('reps');
  if (!load) emptyFields.push('load');

  if (emptyFields.length > 0) {
    return res.status(400).json({
      error: 'Please fill in all fields',
      emptyFields
    });
  }

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
module.exports.deleteWorkout=async(req,res)=>{
        const{id}=req.params;
        const workout=await Workout.findByIdAndDelete(id);  
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'No such workout'});
        }
        res.status(200).json(workout);
    }

//update a  workout 
module.exports.updateWorkout=async(req,res)=>{
        const{id}=req.params;
        const workout=await Workout.findByIdAndUpdate(id,{...req.body});
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'No such workout'});
        }
        res.status(200).json(workout);
    }
