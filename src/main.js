import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

//axios and vue-axios
import VueAxios from 'vue-axios'
import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
window.axios = axios;
Vue.use(VueAxios, axios)

//font-awesome 5
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)


//google vue oauth2

import GAuth from 'vue-google-oauth2'
const gauthOption = {
    clientId: '1027299201170-1r2idq0l56adbuvk0c4sbfm9bsn3khoj.apps.googleusercontent.com',
    scope: 'profile email openid',
    prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)


//main
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
