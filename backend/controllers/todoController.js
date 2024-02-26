const Todo = require('../models/todo')

exports.createTodo =(req,res) => {
    console.log(req.body)
    let newTodo = new Todo(req.body)
    newTodo.save().then(response =>{
        res.send({
            success:true,
            response
        })
    }).catch(err => {
        res.send({
            success:false,
            err
        })
    })
}

exports.readTodo =(req,res) => {
    Todo.find().then(response =>{
        res.send({
            success:true,
            response
        })
    }).catch(err => {
        res.send({
            success:false,
            err
        })
    })
}
exports.oneReadTodo =(req,res) => {
    Todo.findById(req.params.id).then(response =>{
        res.send({
            success:true,
            response
        })
    }).catch(err => {
        res.send({
            success:false,
            err
        })
    })
}
exports.twoReadTodo =(req,res) => {
    Todo.findByIdAndDelete(req.params.id).then(response =>{
        res.send({
            success:true,
            response
        })
    }).catch(err => {
        res.send({
            success:false,
            err
        })
    })
}
exports.updateReadTodo =(req,res) => {
    Todo.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(response =>{
        res.send({
            success:true,
            response
        })
    }).catch(err => {
        res.send({
            success:false,
            err
        })
    })
}
exports.completeTodo =(req,res) =>{
    Todo.find({isComplete:req.params.abc}).then(response => {
        res.send({
            success:true,
            response
        })
    }).catch(err => {
        res.send({
            success:false,
            err
        })
    })
}
exports.searchTitle =(req,res) =>{
    Todo.findOne({title:req.params.title}).then(response => {
        res.send({
            success:true,
            response
        })
    }).catch(err => {
        res.send({
            success:false,
            err
        })
    })
}
