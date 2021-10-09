require('./bootstrap');
import {createApp} from 'vue'
import store  from './store.js'
import App from './App.vue'
import AdminLayout from './layouts/AdminLayout.vue'
import UserLayout from './layouts/UserLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import axios from 'axios'
import router from "./router"
import { Quasar, Dialog, Cookies, AddressbarColor, Notify } from 'quasar'
import 'quasar/dist/quasar.prod.css'
import iconSet from 'quasar/icon-set/fontawesome-v5'

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(store);
app.use(router);
app.use(Quasar,{
    iconSet: iconSet,
    plugins: {
        Cookies,
        Dialog,
        AddressbarColor,
        Notify
    },
    config: {
        notify: {  }
      }
});
app.component('AdminLayout',AdminLayout);
app.component('AuthLayout', AuthLayout);
app.component('UserLayout', UserLayout);

app.mount('#app');
