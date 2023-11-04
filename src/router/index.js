import { createRouter, createWebHistory } from "vue-router";
import CanvasRectangle from "@/views/canvas-rectangle.vue";
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
      path: "/rectangle",
      name: "canvas",
      component: CanvasRectangle,
    },
    // {
    //   path: "/line",
    //   name: "canvas",
    //   component: CanvasRectangle,
    // },
  ],
});

export default router;
