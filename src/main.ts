import { createApp } from "vue";

import App from "./App.vue";

import "./style/index.scss";
console.log(import.meta.env.VITE_APP_URL);

const globModules = import.meta.glob("./glob/*");

Object.entries(globModules).forEach(([k, v]) => {
  v().then((module: any) => console.log(k + ":" + module.default));
});
createApp(App).mount("#app");
