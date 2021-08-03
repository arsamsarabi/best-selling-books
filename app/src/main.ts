import "./assets/style/reset.css";
import "./assets/style/global.css";

import { createApp } from "vue";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(store).use(router).mount("#app");
