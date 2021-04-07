import Vue from "vue";
import ElementUI from "element-ui";
import "./assets/root.scss";
import App from "./App.vue";
import store from "./store";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
