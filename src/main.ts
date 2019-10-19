import "./styles/all.scss";

import Vue from "vue";
import App from "./App.vue";

import store from "./store/index";

new Vue({
    store,
    render: (h => h(App))
}).$mount('#App');