<template>
    <form action="" @submit.prevent="sendTask">
        <input type="text" name="todo-value" id="" placeholder="Nouvelle tâche" v-model="todoValue">
        <button>
            Add
        </button>
    </form>
</template>

<script>
export default {
    name: "NewTodo",
    emits: ["new-todo-task"],
    methods: {
        sendTask() {
            if(this.todoValue) {
                this.$emit("new-todo-task", { todoTask: this.todoValue })
                this.todoValue = ""
            }
        }
    },
    data() {
        return {
            todoValue: ""
        }
    }
}
</script>

<style scoped>

</style>