import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
      saveTask(state, task) {
        const newTask = {value: task.todoTask, checked: false, level: task.todoLevel}
        state.tasks = [...state.tasks, newTask]
      },
      checkTask(state, payload) {
          const { index } = payload
          state.tasks[index].checked = !state.tasks[index].checked
          state
      },
      deleteTask(state, payload) {
          const { index } = payload
          state.tasks =  state.tasks.filter((item, i) => i !== index)  
      },
      deleteAllTasks(state) {
          state.tasks = []
      }, 
      deleteAllCheckedTasks(state) {
        state.tasks = state.tasks.filter(item => !item.checked)
      },
      permutateTasks(state) {
          
          const selectedTasksIndex = state.tasks
          .map((task, index) =>( {task, index}))
          .filter(task => task.task.checked)
        
          if(selectedTasksIndex.length !== 2) {
              alert("La permutation ne peut se faire qu'entre deux éléments de la liste")
              return 
          }

          state.tasks[selectedTasksIndex[0].index] = selectedTasksIndex[1].task
          state.tasks[selectedTasksIndex[1].index] = selectedTasksIndex[0].task
      }
  },
  actions: {
    saveTask(ctx, task) {
      ctx.commit("saveTask", task)
    },
    checkTask(ctx, payload) {
      ctx.commit('checkTask', payload)
    },
    deleteTasks(ctx, {index, onlySelected}) {
      if(index) 
      {
        ctx.commit("deleteTask", {index})
      }else if(onlySelected) 
      {
        ctx.commit("deleteAllCheckedTasks")
      }
      else 
      {
        ctx.commit('deleteAllTasks')
      }
    },
    permutateTasks(ctx) {
      ctx.commit('permutateTasks')
    }
  },
  modules: {
  }
})
