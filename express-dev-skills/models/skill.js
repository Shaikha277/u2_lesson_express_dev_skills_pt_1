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

module.exports = {
  getAll,
  getOne,
}
