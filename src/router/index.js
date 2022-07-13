import Vue from 'vue';
import VueRouter from 'vue-router';

import homePage from "../pages/homePage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component : homePage,

    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;