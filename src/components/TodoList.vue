<template>
    <div class="list">
         <div class="list--header">
            <button @click="permutate">Permuter</button>
            <button @click="deleteAllTasks()">Tout supprimer</button>
            <button @click="deleteAllTasks(true)">Supprimer les terminés</button>
        </div>
        
        <ul>
            <transition-group name="fade">
                <li class="list--item " v-for="(task, index) in tasks" v-bind:key="index">
                    <div class="list--name-wrapper">
                        <input type="checkbox" v-bind:checked="task.checked" @change.prevent="checkTodo(index)">
                        <p :class="{'list--checked' : task.checked}">{{ task.value }}</p>
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
        justify-content: flex-end;
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

    /* ANIM */

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
        opacity: 1;
    }
    .fade-enter-from, .fade-leave-to  {
        opacity: 0;
    }

</style>