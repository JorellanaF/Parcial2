'use strict'

const mongoose = require("mongoose")

const Schema = mongoose.Schema

const TareaSchema = Schema({
    materia: String,
    uv: String,
    descripcion: String
})

module.exports = mongoose.model("tarea", TareaSchema)

//package.json "start": "node ./bin/www"