import { createApp } from "vue";
import router from "./router.js";
import BaseSpinner from "./components/UI/BaseSpinner.vue";

import App from "./App.vue";

const app = createApp(App);
app.component("base-spinner", BaseSpinner);
app.use(router);

app.mount("#app");
