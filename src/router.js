import { createRouter, createWebHistory } from "vue-router";
import CardsPage from "./pages/CardsPage.vue";
import TablesPage from "./pages/TablesPage.vue";
import NotFound from "./components/nav/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/tablesPage" },
    {
      path: "/tablesPage",
      component: TablesPage,
      props: true,
    },

    {
      path: "/CardsPage",
      component: CardsPage,
      props: true,
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPoistion) {
    if (savedPoistion) {
      return savedPoistion;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
