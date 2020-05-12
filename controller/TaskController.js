const TaskModel = require("../model/TaskModel");

class TaskController{
    assync create(req, res){
        const task = new TaskModel(req.body);
        await task.save()
                  .then(response => {res.status(200).json(response)})
                  .catch(error => {res.status(500).json(error)})
    };
}

module.export = new TaskController();