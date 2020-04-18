import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos : [],
    user: {
      name: "ag ag",
      id: 12,
      count: 1
    },
    items : [
      'first',
      'second',
      'third'
    ]
  },
  mutations: {
    UPDATE_NAME (state, payload) {
      state.user.name = payload
    },
    PUSH_NAME (state, payload) {
      state.items.push(payload.name)
    },
    PUSH_TODO (state, obj) {
      state.todos.push(obj)
    },
    UPDATE_TODO (state, data) {
      const todo = state.todos.find( ({ id }) => id === data)
      if (todo.status === true) {
        todo.status = false
      } else {
        todo.status = true
      }
    }
  },
  actions: {
    changeName({ state, commit}, payload) {
      if (state.user) {
        commit('UPDATE_NAME', payload)
      }
    },
    addTodo({commit}, obj) {
      commit('PUSH_TODO', obj)
    },
    updateTodoStatus({ state, commit}, data) {
      if (state.todos.find( ({ id }) => id === data)) {
        commit('UPDATE_TODO', data)
      }
    }
  },
  getters : {
    arrayCount : state => {
      return state.items.length
    },
    allTodos: state => {
      return state.todos
    }
  },
  modules: {}
});
