import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: ()=>import("../components/container/src/index.vue"),
    children:[
      {
        path: "/",
        component: Home,
      },
      {
        path: "/chooseIcon",
        component: ()=>import("../views/chooseIcon/index.vue"),
      },
      {
        path: "/chooseArea",
        component: ()=>import("../views/chooseArea/index.vue"),
      },
    ]
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
