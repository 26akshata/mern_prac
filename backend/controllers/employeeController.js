const Employee =require('../models/employee')

exports.createEmployee =(req,res) =>{
    console.log(req.body)
    let newEmployee = new Employee(req.body)
    newEmployee.save().then(response => {
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
exports.getEmployee =(req,res) => {
    Employee.find().then(response =>{
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
exports.salaryEmployee = (req, res) => {
    console.log(typeof parseInt(req.params.a))
    Employee.find({
        $expr: {
            $gt: [{ $toInt: "$salary" }, parseInt(req.params.a)]
        }
    })
        .then(response => {
            res.send({
                success: true,
                response
            });
        })
        .catch(err => {
            res.send({
                success: false,
                err
            });
        });
};
exports.updateEmployee =(req,res) =>{
    console.log(req.params)
    Employee.updateOne({_id:req.params.id},req.body,{new:true}).then(response =>{
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
exports.updateEmployee =(req,res) =>{
    console.log(req.params)
    Employee.updateOne({_id:req.params.id},req.body,{new:true}).then(response =>{
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
