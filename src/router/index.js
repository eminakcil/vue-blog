import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ManagementLayout from "@/layouts/ManagementLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/management",
      name: "management",
      component: ManagementLayout,
      redirect: "/management/dashboard",
      children: [
        {
          path: "/management/dashboard",
					name: "dashboard",
					component: () => import("@/views/management/Dashboard.vue")
        },
      ],
    },
  ],
});

export default router;
