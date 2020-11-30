import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import './directives/focus';
import router from './router';
import i18n from './i18n';

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
