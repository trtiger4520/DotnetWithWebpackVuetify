import Vue from "vue";
import store from "./store/index";
import vuetify from "./plugins/vuetify";

import App from "./App.vue";

new Vue({
    store,
    vuetify,
    render: (h => h(App))
}).$mount('#App');