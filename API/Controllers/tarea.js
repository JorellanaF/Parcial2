'use strict'

const tarea = require("../models/tarea")

function getTareas(req,res){
    tarea.find({}, (err, tareas) => {
        if(err){
            return res.status(500).send({message: `Error del servidor al mandar la pedicion: ${err}`})
        }
        if(!tareas){
            return res.status(4040).send({message: "No existen tareas"})
        }
        res.status(200).send({tarea: tareas})
    })
}

function getTarea(req,res){
    let tareaId = req.params.tareaId
    console.log(req.body)
    tarea.findById(tareaId,(err, tarea) =>{
        if(err){
            return res.status(500).send({message: `Error del servidor al mandar la pedicion: ${err}`})
        }
        if(!tarea){
            return res.status(4040).send({message: "No existe la tarea"})
        }
        res.status(200).send({tarea: tarea})
    })
}

function saveTarea(req,res){
    let nuevo = {
        materia: req.body.materia,
        uv: req.body.uv,
        descripcion: req.body.descripcion
    }
    tarea.save(nuevo,(err,tarea) => {
        if(err){
            return res.status(500).send({message: `Error del servidor al mandar la pedicion: ${err}`})
        }
        res.status(200).send({tarea: tarea})
    })
}

function updateTarea(req, res){
    let tareaId = req.params.tareaId
    let nuevo = {
        materia: req.body.materia,
        uv: req.body.uv,
        descripcion: req.body.descripcion
    }
    tarea.findByIdAndUpdate(tareaId, nuevo, (err, tarea) => {
        if(err){
            return res.status(500).send({message: `Error del servidor al mandar la pedicion: ${err}`})
        }
        if(!tarea){
            return res.status(4040).send({message: "No existe la tarea"})
        }
        res.status(200).send({message: "Tarea actualizada"})
    })
}