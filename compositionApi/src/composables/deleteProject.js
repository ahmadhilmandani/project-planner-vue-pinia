export default function deleteProject(projects, projectId) {

  const index = projects.findIndex(project => project.id === projectId);
  if (index !== -1) {
    projects.splice(index, 1);
  }

  localStorage.setItem("projects", JSON.stringify(projects))
}