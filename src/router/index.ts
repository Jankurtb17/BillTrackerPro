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
      meta: {
        isSignin: true
      }
    },
    {
      path: "/login",
      name: "LoginPage",
      components: {
        SignIn: () => import("@/views/LoginPage.vue"),
      },
      meta: {
        isSignin: true
      }
    },
    {
      path: "/register",
      name: "RegisterPage",
      components: {
        SignIn: () => import("@/views/RegisterPage.vue"),
      },
      meta: {
        isSignin: true
      }
    },
    {
      path: "/dashboard",
      name: "MainDashboard",
      components: {
        Dashboard: () => import("@/views/AppDashboard.vue"),
      },
      meta: {
        isSignin: false
      }
    },
    {
      path: "/billing-list",
      name: "BillingList",
      components: {
        Dashboard: () => import("@/views/RecentBilling.vue"),
      },
      meta: {
        isSignin: false
      }
    },
  ],
});

export default router;
