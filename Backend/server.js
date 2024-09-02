const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const todoModel = require('./models/todoList');
const todoList = require('./models/todoList');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// connect to mongodb

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;


//mongodb connection
mongoose.connect(`mongodb+srv://${dbUser}:${encodeURIComponent(dbPassword)}@${dbHost}/`)
    .then(() => console.log('MongoDB connection successful'))


mongoose.connection.on('error', (error) => {
    console.error("Mongodb connection error:", error);
});


//get saved list
app.get('/getTodoList', (req, res) => {
    todoModel.find({})
        .then((todoList) => res.json(todoList))
        .catch((error) => res.json(error))
});

//add list
app.post('/addTodoList', (req, res) => {
    todoModel.create({
        task: req.body.task,
        status: req.body.status,
        deadline: req.body.deadline
    })
        .then((todo) => res.json(todo))
        .catch((error) => res.json(error))
});

//update task field
app.post('/updateTodoList/:id', (req, res) => {
    const id = req.params.id;
    const updateData = {
        task: req.body.task,
        status: req.body.status,
        deadline: req.body.deadline
    };

    todoModel.findByIdAndUpdate(id, updateData)
        .then((todo) => res.json(todo))
        .catch((error) => res.json(error))
});

//delete task field
app.delete('/deleteTodoList/:id', (req, res) => {
    const id = req.params.id;
    todoModel.findByIdAndDelete({ _id: id })
        .then((todo) => res.json(todo))
        .catch((error) => res.json(error))
});

app.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`);
});

