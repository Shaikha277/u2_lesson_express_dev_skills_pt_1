const { updateSkill } = require("../controllers/skills")

const skills = [
  { id: 125223, skill: "Get my nails done ", done: true },
  { id: 127904, skill: "Learn javaScript", done: false },
  { id: 139608, skill: "get enough sleep", done: false },
]

const getAll = () => {
  return skills
}
const getOne = (id) => {
  let skill = skills.find((skill) => {
    //find todo where id is  equal to the id parameter
    return skill.id === parseInt(id)
  })
  return skill
}
const create = (skill) => {
  skill.id = Date.now() % 1000
  skill.done = false
  skills.push(skill)
}

const updateOne = (id, updatedSkill) => {
  const skillToUpdate = skills.find((skill) => {
    return skill.id === parseInt(id)
  })
  skillToUpdate.skill = updatedSkill
}
const deleteOne = (id) => {
  const index = skills.findIndex((skill) => {
    return skill.id === parseInt(id)
  })
  skills.splice(index, 1)
}

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne,
}
