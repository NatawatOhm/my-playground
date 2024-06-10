import { createRouter, createWebHistory } from "vue-router";
import DemoPage from "../views/Demo.vue"

const routes = [

  {
    path: '/demo',
    component: DemoPage
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router