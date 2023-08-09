import { createRouter, createWebHistory } from "vue-router"
import IndexView from "@/views/index.vue"
import FaqView from "@/views/FaqView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexView
    },
    {
      path: "/Faq",
      name: "Faq",
      component: FaqView
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue")
    }
  ]
})

export default router
