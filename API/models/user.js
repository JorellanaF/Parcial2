'use strict'

const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UserSchema = Schema({
    materia: String,
    uv: String,
    descripcion: String
})

module.exports = user

//package.json "start": "node ./bin/www"