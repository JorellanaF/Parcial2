'use strict'

const mongoose = require("mongoose")

const Schema = mongoose.Schema

const TareaSchema = new Schema({
    materia: String,
    uv: String,
    descripcion: String
})

module.exports = mongoose.model("Tarea", TareaSchema)

//package.json "start": "node ./bin/www"