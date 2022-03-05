import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
// import Container from "../components/container/src/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: ()=>import("../components/container/src/index.vue"),
    children:[
      {
        path: "/",
        component: Home,
      },
    ]
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
