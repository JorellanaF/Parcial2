'use strict'

const mongoose = require("mongoose")

const Schema = mongoose.Schema

const TareaSchema = new Schema({
    nombre: String,
    descripcion: String,
    reaccion: { type: Number, default: 0}
})

module.exports = mongoose.model("Tarea", TareaSchema)

//package.json "start": "node ./bin/www"