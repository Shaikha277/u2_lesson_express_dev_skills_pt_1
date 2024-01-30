var express = require("express")
var router = express.Router()
const skillsCtrl = require("../controllers/skills")
// routes/skills.js

var express = require("express")
var router = express.Router()

// GET /skills
router.get("/", skillsCtrl.index)
//new
router.get("/new", skillsCtrl.newSkill)
// GET /skills/:id
router.get("/:id", skillsCtrl.show)
//post
router.post("/", skillsCtrl.create)
//get
router.get("/:id/edit", skillsCtrl.edit)
//put
router.put("/:id", skillsCtrl.updateSkill)
//delete
router.delete("/:id", skillsCtrl.deleteSkill)
module.exports = router
