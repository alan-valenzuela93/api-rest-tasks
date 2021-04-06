import Task from '../models/Task'

export const findAllTask = async (req, res) => {
    try {
    const tasks = await Task.find()
    res.json(tasks);        
    } catch (error) {
        res.stats(500).json({
            message: error.message || "something goes wrong retrieving tasks"
        });
    }
}

export const createTask = async (req, res) => {
    if(!req.body.title) {
        return res.status(400).send({
            message: "Content cannot be empty"
        });
    }
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        done: req.body.done ? req.body.done: false
    });
    const taskSaved = await newTask.save()
    console.log(newTask) //mostrar en consola cada vez que se haga un POST
    res.json(taskSaved)
}

export const findAllDoneTask = async (req, res) => {
    const tasks = await Task.find({done: true});
    res.json(tasks);
};

export const findOneTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
};

export const deleteTask = async (req, res) => {
    const data = await Task.findByIdAndDelete(req.params.id);
    res.json({
        message: "task were deleted"
    });
}

export const updateTask = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({message: "task was updated successfully"});
};