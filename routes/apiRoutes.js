var db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).sort({ _id: -1 }).limit(1).then(function (data) {
            res.json(data);
        });
    });

    app.put("/api/workouts/:id", function (req, res) {
        db.Workout.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { exercises: req.body } },
            { new: true }
        ).then(function (data) {
            res.json(data);
        });
    });

    app.post("/api/workouts", function (req, res) {
        db.Workout.create(req.body).then(function (data) {
            res.json(data);
        });
    });

    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({}).then(function (data) {
            res.json(data);
        });
    });
}