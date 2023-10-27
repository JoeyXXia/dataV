import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dataV",
      component: HelloWorld,
    },
  ],
});

export default router;
