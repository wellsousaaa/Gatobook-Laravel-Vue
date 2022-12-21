require("./bootstrap");
window.Vue = require("vue").default;
import { createApp } from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import * as VueRouter from "vue-router";
import { routes } from "./routes";
import "vue-js-modal/dist/styles.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiHeart, BiSend, IoLogoOctocat } from "oh-vue-icons/icons";

addIcons(BiHeart, BiSend, IoLogoOctocat);

const app = createApp(App);

const router = VueRouter.createRouter({
    routes,
    // mode: "history",
    history: VueRouter.createWebHistory(),
});

app.use(VueAxios, axios);

app.component("v-icon", OhVueIcon);

app.use(router).mount("#app");
