<template>
    <div class="list">
         <div class="list--header">
            <button @click="permutate" class="list--btn">Permuter</button>
            <div>
                <button @click="deleteAllTasks()" class="list--btn list--btn-danger">Tout supprimer</button>
                <button @click="deleteAllTasks(true)" class="list--btn list--btn-danger">Supprimer les terminés</button>
            </div>

        </div>
        <strong v-if="tasks.length === 0">Aucun élément disponible</strong>
        <ul v-if="tasks.length > 0">
            <transition-group name="fade">
                <li class="list--item " v-for="(task, index) in tasks" v-bind:key="index">
                    <div class="list--name-wrapper">
                        <input type="checkbox" v-bind:checked="task.checked" @change.prevent="checkTodo(index)">
                        <p :class="{'list--checked' : task.checked}">{{ task.value }}</p>
                        <span class="list--level" :style="{backgroundColor: task.level.color}">{{task.level.value}}</span>
                    </div>
                    <button @click="deleteTask(index)">Delete</button>
                </li>
            </transition-group>
        </ul>
    </div>
   
</template>

<script>
export default {
    name: "todo-list",
    emits: ["task-check", "delete-task", "delete-all-tasks", "task-permutation"],
    props:  {
        tasks: Array
    },
    methods: {
        checkTodo(index) {
            this.$emit('task-check', {index})
        },
        deleteTask(index) {
            this.$emit("delete-task", {index})
        },
        deleteAllTasks(onlySelected = false) {
            this.$emit("delete-all-tasks", {onlySelected})
        },
        permutate() {
            this.$emit("task-permutation")
        }
    }
}
</script>

<style scoped>
    .list--header {
        padding: 20px 10px;
        display: flex;
        justify-content: space-between;
    }
    .list--header button {
        margin: 0 10px;
    }
    .list--item {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;;
    }
    .list--name-wrapper {
        display: flex;
        align-items: center;
    }
    .list--name-wrapper input[type="checkbox"] {
        margin-right: 10px;
    }
    .list--checked {
        text-decoration: line-through; 
    }
    .list--btn {
        background-color: #3384FF;
        padding: 5px 10px;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
    }
    .list--btn-danger {
        background-color: #F8614A;
    }
    .list--level {
        color: white;
        margin-left: 10px;
        padding: 5px;
        font-size: .7em;
        border-radius: 8px;
    }

    /* ANIM */

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
        opacity: 1;
    }
    .fade-enter-from, .fade-leave-to  {
        opacity: 0;
    }

</style>