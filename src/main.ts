import { createApp } from "vue";
import "./style.css";
import router from "./router/index.ts";
import "@fontsource/roboto/400.css";
import "@fontsource/lalezar";
import FontAwesomeIcon from "./plugins/FontAwesomeIcon.ts";
import App from "./App.vue";

const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
