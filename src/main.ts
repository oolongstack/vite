import { createApp } from "vue";

import App from "./App.vue";

import "./style/index.scss";
console.log(import.meta.env.VITE_APP_URL);

createApp(App).mount("#app");
