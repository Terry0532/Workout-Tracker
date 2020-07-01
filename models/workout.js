var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [{
        type: { type: String, required: true },
        name: { type: String, required: true },
        duration: { type: Number, required: true },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }]
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;