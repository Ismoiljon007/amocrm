import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeflex/themes/primeone-dark.css";
import "primeflex/themes/primeone-light.css";
import ToastService from "primevue/toastservice";
const app = createApp(App);
app.use(ToastService);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(createPinia());
app.use(router);
app.mount("#app");
