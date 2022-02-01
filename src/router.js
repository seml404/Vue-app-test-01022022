import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
// import List from "./views/List.vue";

let routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/to-do-list",
    name: "List",
    component: () => import("./views/List.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes: routes,
});
