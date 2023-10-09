import { defineStore } from "pinia";

export const useProjectStore = defineStore('projects', {
  state: () => ({
    objProjects: JSON.parse(localStorage.getItem("projects")),
    loading: false,
    title: null,
    deadline: null,
    description: null,
    stepToDo: [],
    numbersOfstep: 1,
    isStepError: false,
  }),
  getters: {
    getDoneProject() {
      return this.objProjects.filter((project) => project.isDone)
    },
    getonProgressProject() {
      return this.objProjects.filter((project) => !project.isDone)
    },
    getState(state) {
      const {
        title, deadline
      } = state;

      return {
        title, deadline
      };
    }
  },
  actions: {
    changeState(stateName, newValue) {
      this[stateName] = newValue
    },

    toogleIsDone(projects, projectId) {
      for (let index = 0; index < this.objProjects.length; index++) {
        if (projects[index].id === projectId) {
          projects[index].isDone = true
          localStorage.setItem("projects", JSON.stringify(projects))
          break;
        }
      }
    },

    deleteProject(projects, projectId) {
      const index = projects.findIndex(project => project.id === projectId);
      if (index !== -1) {
        projects.splice(index, 1);
      }

      localStorage.setItem("projects", JSON.stringify(projects))
    },

    async addProjects() {
      const timeDifference = new Date(this.deadline) - new Date();

      if (this.objProjects == null || this.objProjects.length == 0) {
        this.objProjects = [{ id: 1, title: this.title, body: this.description, deadline: this.deadline, deadlineLeft: Math.floor(timeDifference / (24 * 60 * 60 * 1000)), stepToDo: this.stepToDo, isDone: false }]
        localStorage.setItem("projects", JSON.stringify(this.objProjects))
      }
      else {
        this.objProjects.push({ id: (this.objProjects[this.objProjects.length - 1].id + 1), title: this.title, body: this.description, deadline: this.deadline, deadlineLeft: Math.floor(timeDifference / (24 * 60 * 60 * 1000)), stepToDo: this.stepToDo, isDone: false })
        localStorage.setItem("projects", JSON.stringify(this.objProjects))
      }

      this.title = null
      this.deadline = null
      this.description = null
      this.stepToDo = []
      this.numbersOfstep = 0
      this.isStepError = false
    },

    handleStep(e) {
      if (e.target.value !== null && e.target.value !== undefined) {
        if (this.stepToDo.length >= this.numbersOfstep)
          return this.stepToDo[this.numbersOfstep] = e.target.value

        this.stepToDo.push(e.target.value)
      }
    },

    addNumbersOfstepStep() {
      if (this.stepToDo.length < this.numbersOfstep) {
        return this.isStepError = true
      }

      this.numbersOfstep = this.numbersOfstep + 1
      this.isStepError = false
    },
  }
})