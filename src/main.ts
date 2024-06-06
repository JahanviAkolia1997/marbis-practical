import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Create the Vue application instance, add the store and router to it, and mount it to the DOM element with the id "app"
createApp(App)
  .use(store) // Use the Vuex store
  .use(router) // Use the Vue Router
  .mount("#app"); // Mount the app to the DOM element with id 'app'
