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
module.exports = {
  index,
  show,
}
