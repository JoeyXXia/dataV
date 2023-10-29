import { createRouter, createWebHistory } from "vue-router";
import Canvas from "@/views/Canvas.vue";
import DataView from "@/views/DataView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dataV",
      component: DataView,
    },
    {
      path: "/canvas",
      name: "canvas",
      component: Canvas,
    },
  ],
});

export default router;
