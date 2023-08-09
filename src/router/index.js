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
  ]
})

export default router
