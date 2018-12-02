'use strict'

var express = require('express');
var router = express.Router();
const TareaController = require("../Controllers/tarea")

/* GET users listing. */
router.get("/tarea", TareaController.getTareas)
router.get("/tarea/:tareaId", TareaController.getTarea)
router.post("/tarea", TareaController.saveTarea)
router.put("/tarea/:tareaId", TareaController.updateTarea)
router.delete("/tarea/:tareaId", TareaController.deleteTarea)

module.exports = router;
