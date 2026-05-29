const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")


const getWorkouts = async (req, res) => {
  const user_id = req.user._id

  const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 })

  res.json(workouts)
}


const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" })
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({ error: "Not found" })
  }

  res.json(workout)
}

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body

  const user_id = req.user._id

  const workout = await Workout.create({
    title,
    reps,
    load,
    user_id
  })

  res.json(workout)
}

const deleteWorkout = async (req, res) => {
  const { id } = req.params
  const user_id = req.user._id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" })
  }

  const workout = await Workout.findOneAndDelete({
    _id: id,
    user_id
  })

  if (!workout) {
    return res.status(404).json({ error: "Not authorized" })
  }

  res.json(workout)
}

const updateWorkout = async (req, res) => {
  const { id } = req.params
  const user_id = req.user._id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" })
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id, user_id },
    { ...req.body },
    { new: true }
  )

  if (!workout) {
    return res.status(404).json({ error: "Not authorized" })
  }

  res.json(workout)
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}