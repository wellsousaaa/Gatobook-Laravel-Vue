import Feed from "./components/Feed.vue";
import Profile from "./components/Profile.vue";

export const routes = [
    {
        path: "/",
        component: Feed,
    },
    {
        path: "/profile",
        component: Profile,
    },
];
