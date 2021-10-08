/* eslint-disable semi */
import { createRouter, createWebHashHistory } from "vue-router";
import Introduction from "../views/Introduction.vue";

const routes = [
  {
    path: "/",
    name: "Introduction",
    component: Introduction
  },
  {
    path: "/people",
    name: "People",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/People.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
