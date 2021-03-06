import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import './registerServiceWorker';
import './directives/focus';

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
