const Skill = require("../models/skill")
const index = (req, res) => {
  const skills = Skill.getAll()
  const title = "Get it DONE"
  res.render("skills/index", {
    skills,
    title,
  })
}
const show = (req, res) => {
  const skills = Skill.getOne(req.params.id)
  res.render("skills/show", { skills })
}
const newSkill = (req, res) => {
  res.render("skills/new")
}
const create = (req, res) => {
  Skill.create(req.body)
  res.redirect("/skills")
}
const edit = (req, res) => {
  const skill = Skill.getOne(req.params.id)
  res.render("skills/edit", { skill })
}
const updateSkill = (req, res) => {
  let skillId = req.params.id
  let updateSkill = req.body.skill
  Skill.updateOne(skillId, updateSkill)
  res.redirect("/skills")
}
const deleteSkill = (req, res) => {
  Skill.deleteOne(req.params.id)
  res.redirect("/skills")
}
module.exports = {
  index,
  show,
  newSkill,
  create,
  edit,
  updateSkill,
  deleteSkill,
}
