import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App), // App을 화면에 뿌려주는 역할, components 속성과 같은 역할
}).$mount("#app");
