import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueResource);
export const EventBus = new Vue();
// Vue.component('component-a', { /* ... */ })- Global component registration example

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
