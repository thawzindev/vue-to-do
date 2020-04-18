<template>
    <div>
        <h3>Add new to-do</h3>

         <form class="add-todi" @submit.prevent="addTodo">
             <label for="name">Name</label>
            <input id="name" type="text" v-model="todo.name">
            <br>
            <br>
            <button type="submit">Submit</button>
        </form>

        <div class="list">
            <h1>List here</h1>
            <ul>
                <li v-for="todo in allTodos" :key="todo.id">
                    <a href="#" @click="updateTodoStatus(todo.id)" :class="{ doneTodo: todo.status == true }">
                        {{ todo.name }} done : {{ todo.status }}
                    </a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import store from '@/store/index.js'


export default {
  data() {
    return {
      todo: this.createFreshTodoObject(),
      allTodos : store.getters.allTodos
    }
  },
  methods: {
      addTodo() {
        store.dispatch('addTodo', this.todo).then(() => {
            this.todo = this.createFreshTodoObject();
        })
      },
      createFreshTodoObject() {
          const id = Math.floor(Math.random() * 10000000)

          return {
              id,
              status: false,
              name : ''
          }
      },
      updateTodoStatus(id) {
        store.dispatch('updateTodoStatus', id)
      }
  },
  computed: {

  },
}
</script>

<style scoped>
    li {
        text-decoration-color: chocolate;
    }
    li > a  {
        text-decoration: none;
    }
    .doneTodo {
        text-decoration: line-through;
        /* cursor: not-allowed; */
        color: gray
    }
</style>