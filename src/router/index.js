import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";
import TodoList from "../views/TodoList.vue";
import TodoCreate from "../views/TodoCreate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/todo/create",
    name: "todo-create",
    component: TodoCreate
  },
  {
    path: "/todos",
    name: "todos",
    component: TodoList
  },
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
