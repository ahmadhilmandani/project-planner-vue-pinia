
export default function toogleIsDone(projects, projectId) {
  for (let index = 0; index < projects.length; index++) {
    if (projects[index].id === projectId) {
      projects[index].isDone = true
      localStorage.setItem("projects", JSON.stringify(projects))
      break;
    }
  }
}