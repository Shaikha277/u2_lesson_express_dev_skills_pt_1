var express = require("express")
var router = express.Router()
const skillsCtrl = require("../controllers/skills")
// routes/todos.js

var express = require("express")
var router = express.Router()

// Require the controller that exports To-Do CRUD functions
// var todosCtrl = require("../controllers/todos")

// All actual paths begin with "/todos"

// GET /todos
router.get("/", skillsCtrl.index)
// GET /todos/:id
router.get("/:id", skillsCtrl.show)
module.exports = router
