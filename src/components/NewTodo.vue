<template>
    <form action="" @submit.prevent="sendTask" class="form">
        <div class="form--fields">
             <div class="form--field">
                <label for="todo-value">Nom de la tâche</label>
                <input id="todo-value" type="text" name="todo-value" placeholder="Nouvelle tâche" v-model="todoValue" required>
            </div>
            <div class="form--field">
                <label for="todo-cat">Catégorie de la tâche</label>
                <select v-model="todoLevel">
                    <option v-for="(level, index) in levels" v-bind:key="index" :selected="index === 0" :value="level">{{level.value}}</option>
                </select>
            </div>
        </div>
        <button class="form--btn"> 
            Ajouter
        </button>
    </form>
</template>

<script>
export default {
    name: "NewTodo",
    emits: ["new-todo-task"],
    props: {
        levels: Array
    },
    methods: {
        sendTask() {
            if(this.todoValue && this.todoLevel) {
                
                this.$emit("new-todo-task", { todoTask: this.todoValue, todoLevel: this.todoLevel })
                this.todoValue = ""
            }
        }
    },
    data() {
        return {
            todoValue: "",
            todoLevel: ""
        }
    }
}
</script>

<style scoped>
    .form {
       display: flex; 
       flex-direction: column;
       align-items: center;
       border-bottom: 2px solid;
       padding: 20px;
    }
    .form--btn {
        padding: 10px 15px;
        background-color: green;
        color: white;
        border: none;
        margin: 0 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    .form--fields {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
    .form--field {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }
    .form--fields label {
        margin-right: 10px;
    }

</style>