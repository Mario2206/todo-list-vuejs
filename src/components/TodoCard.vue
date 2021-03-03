<template>
    <article class="card">
        <header class="card--header">
            <p>
                {{ today }}
            </p>
            <h1 class="card--title">{{ title }}</h1>
            <p>
                {{ taskLength }} Tâche{{ taskLength > 1 ? "s" : "" }} 
            </p>
        </header>
        <div class="card--form">
            <new-todo @new-todo-task="saveTask" :levels="todoLevels"></new-todo>
        </div>
        <div class="card--main">
            <h2>TodoList</h2>
            <todo-list 
            v-bind:tasks="tasks" 
            @task-check="checkTask" 
            @delete-task="deleteTask" 
            @delete-all-tasks="deleteAllTasks" 
            @task-permutation="permutateTasks"></todo-list>
        </div>
    </article>
</template>
<script>
import NewTodo from './NewTodo.vue';
import TodoList from './TodoList'

export default {
  components: { NewTodo, TodoList },
    name: "todo-card",
    props: [
        "title"
    ],
    methods: {
        saveTask(e) {
            const newTask = {value: e.todoTask, checked: false, level: e.todoLevel}
            this.tasks = [...this.tasks, newTask]
        },
        checkTask(e) {
            const { index } = e
            this.tasks[index].checked = !this.tasks[index].checked
        },
        deleteTask(e) {
            const { index } = e
            return this.tasks =  this.tasks.filter((item, i) => i !== index)  
        },
        deleteAllTasks({onlySelected}) {
            return this.tasks = onlySelected ? this.tasks.filter((item) => !item.checked ) : []
        }, 
        permutateTasks() {
            
            const selectedTasksIndex = this.tasks
            .map((task, index) =>( {task, index}))
            .filter(task => task.task.checked)
           
            if(selectedTasksIndex.length !== 2) {
                alert("La permutation ne peut se faire qu'entre deux éléments de la liste")
                return 
            }

            this.tasks[selectedTasksIndex[0].index] = selectedTasksIndex[1].task
            this.tasks[selectedTasksIndex[1].index] = selectedTasksIndex[0].task

        }
    },
    data() {
        return {
            tasks: [],
            todoLevels: [
                {
                    value: "Faible",
                    color: "grey"
                },
                {
                    value: "Normal",
                    color: "blue"
                },
                {
                    value: "Important",
                    color: "red"
                }
            ]
        }
    },
    computed: {
        today() {
            const now = new Date()
            const day = now.toLocaleString("default", { weekday : "long"})
            const month = now.toLocaleString("default", {month: "long"})
            return `${day} ${now.getDay()} ${month}`
        },
        taskLength() {
            return this.tasks && Array.isArray(this.tasks) ? this.tasks.length : 0
        }
    }
}
</script>

<style scoped>
    .card--header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        box-shadow: 0 10px 6px rgba(0, 0, 0, .1);
    }

    .card--title {
        font-size: 1.4em;
    }

    .card--form {
        padding: 20px 10px  ;
    }
    .card--main {
        padding: 30px 0;
    }
</style>