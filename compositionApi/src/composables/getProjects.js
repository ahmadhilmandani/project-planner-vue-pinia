export default function getProjects() {
  return JSON.parse(localStorage.getItem("projects"))
}
