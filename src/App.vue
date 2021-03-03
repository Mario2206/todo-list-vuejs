
<template>
  <div id="app">
     <section class="hero is-warning is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <todo-card title="VueJs Tutorial ToDo List">
            <template v-slot:todo-form>
              <new-todo></new-todo>
            </template>
          </todo-card>
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered pb-5">
            <p>
              Découvrez comment styliser simplement votre ToDo list avec 
              <a class="has-text-primary" href="https://bulma.io/">
                <strong>Bulma</strong>
              </a> 
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TodoCard from "./components/TodoCard"
import NewTodo from "./components/NewTodo"


export default {
  name: 'app',
  components : {
    TodoCard,
    NewTodo
  },
  data: function() {
    return {
        msg : "Hello"
    };
}
}
</script>

<style>
</style>