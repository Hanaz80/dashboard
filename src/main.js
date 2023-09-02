import { createApp } from 'vue'
import App from './App.vue'
import ("./assets/style/main.scss")
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap-icons/font/bootstrap-icons.css";
createApp(App)
.use(store)
.use(router)
.use(VueAxios, axios)
.mount('#app')
