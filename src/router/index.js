/* eslint-disable semi */
import { createRouter, createWebHashHistory } from "vue-router";
import Introduction from "../views/Introduction.vue";

const routes = [
  {
    path: "/people",
    name: "people",
    // route level code-splitting
    // this generates a separate chunk (People.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "People" */ "../views/People.vue")
  },

  {
    path: "/planets",
    name: "planets",
    component: () => import("../views/Planets.vue")
  },

  {
    path: "/films",
    name: "films",
    component: () => import("../views/Films.vue")
  },
  {
    path: "/",
    name: "introduction",
    component: Introduction
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
