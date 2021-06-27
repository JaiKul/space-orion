import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/management",
    name: "Management",
    component: () =>
      import(/* webpackChunkName: "management" */ "../views/Management.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/Gallery.vue"),
  },
  {
    path: "/downloads",
    name: "Downloads",
    component: () =>
      import(/* webpackChunkName: "downloads" */ "../views/Downloads.vue"),
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () =>
      import(/* webpackChunkName: "contact-us" */ "../views/ContactUs.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
