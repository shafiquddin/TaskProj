import { createApp } from "vue";
import router from "./router.js";
import BaseSpinner from "./components/UI/BaseSpinner.vue";
import store from "./store/index.js";

import App from "./App.vue";

const app = createApp(App);
app.component("base-spinner", BaseSpinner);
app.use(router);
app.use(store);

app.mount("#app");
