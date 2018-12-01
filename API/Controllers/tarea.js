'use strict'

const Tarea = require("../models/tarea")

function getTareas(req,res){
    Tarea.find({}, (err, Tareas) => {
        if(err){
            return res.status(500).send({message: `Error del servidor al mandar la pedicion: ${err}`})
        }
        if(!Tareas){
            return res.status(4040).send({message: "No existen tareas"})
        }
        res.status(200).send({Tarea: Tareas})
    })
}

function getTarea(req,res){
    let tareaId = req.params.tareaId
    console.log(req.body)
    Tarea.findById(tareaId,(err, Tarea) =>{
        if(err){
            return res.status(500).send({message: `Error del servidor al mandar la pedicion: ${err}`})
        }
        if(!Tarea){
            return res.status(4040).send({message: "No existe la tarea"})
        }
        res.status(200).send({Tarea: Tarea})
    })
}

function saveTarea(req,res){
    console.log(req.body)
    let tarea = new Tarea({
        materia: req.body.materia,
        uv: req.body.uv,
        descripcion: req.body.descripcion
    })
    tarea.save((err,Tarea) => {
        if(err){
            return res.status(500).send({message: `Error del servidor al mandar la pedicion: ${err}`})
        }
        res.status(200).send({Tarea: Tarea})
    })
}

function updateTarea(req, res){
    let tareaId = req.params.tareaId
    let nuevo = {
        materia: req.body.materia,
        uv: req.body.uv,
        descripcion: req.body.descripcion
    }
    Tarea.findByIdAndUpdate(tareaId, nuevo, (err, Tarea) => {
        if(err){
            return res.status(500).send({message: `Error del servidor al mandar la pedicion: ${err}`})
        }
        if(!Tarea){
            return res.status(4040).send({message: "No existe la tarea"})
        }
        res.status(200).send({message: "Tarea actualizada"})
    })
}

function deleteTarea(req, res){
    let tareaId = req.params.tareaId
    Tarea.findByIdAndDelete(tareaId, (err, Tarea) => {
        if(err){
            return res.status(500).send({message: `Error del servidor al mandar la pedicion: ${err}`})
        }
        if(!Tarea){
            return res.status(4040).send({message: "No existe la tarea"})
        }
        res.status(200).send({message: "Tarea eliminada"})
    })
}

module.exports = {
    getTareas,
    getTarea,
    saveTarea,
    updateTarea,
    deleteTarea
}