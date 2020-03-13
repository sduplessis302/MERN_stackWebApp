const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Task = require('../models/Task');

/*
// GET ALL users

router.get('/users', function(req, res){
    let users = User.find({}, function(err, users){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else {
            console.log(users)
            res.json(users);
        }
    })
})
*/

// ADD user
router.post('/users/add', function (req, res) {

    let user = new User();
    user.name = req.body.name;
    user.picture = req.body.picture;
    user.themePreference = req.body.themePreference;

    user.save(function(err){
        if(err){
            console.log(err);
            res.json({msg: "failed..."})
        }
        else{   
            res.json(user)
        }
    });
});


//GET ALL task
router.get('/schedule/get/:username', function(req, res){
    let tasks = Task.find({}, function(req, res){
        if(err){
            console.log(err);
            res.json({msg: "error retriving tasks..."});
        } else {
            console.log(tasks);
            res.json(tasks);
        }
    })

});

//ADD task 
router.post('/schedule/post', function(req, res){

    let task = new Task();
    task.user = req.body.user;
    task.taskID = req.body.taskID;
    task.title = req.body.title;
    task.description = req.body.description;
    task.location = req.body.location;
    task.priority = req.body.priority;
    task.duration = req.body.duration;
    task.startDate = req.body.startDate;
    task.endDate = req.body.endDate;
    task.reminder = req.body.reminderDate;

    task.save(function(err){
        if(err){
            console.log(err);
            res.json({msg: "error adding task..."});
        } else {
            res.json(task)
        }
    });
});

//DELETE task
router.post('/api/schedule/:taskid', function(req, res){
    
    Task.remove(function(err){
        if(err){
            console.log(err);
            res.json({msg: "error deleting task..."});
        } else {
            res.json({msg: "delete successful"});
        }
    });
});

module.exports = router;