import Feed from "./components/Feed.vue";
import Login from "./components/Login.vue";

export const routes = [
    {
        path: "/",
        component: Feed,
    },
    {
        path: "/login",
        component: Login,
    },
];
