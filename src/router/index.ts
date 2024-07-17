import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "WelcomePage",
      components: {
        SignIn: () => import("@/views/WelcomePage.vue"),
      },
    },
    {
      path: "/login",
      name: "LoginPage",
      components: {
        SignIn: () => import("@/views/LoginPage.vue"),
      },
    },
    {
      path: "/register",
      name: "RegisterPage",
      components: {
        SignIn: () => import("@/views/RegisterPage.vue"),
      },
    },
  ],
});

export default router;
