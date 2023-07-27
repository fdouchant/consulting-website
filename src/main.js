import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// imports
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import 'bootstrap-icons/font/bootstrap-icons.css'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

createApp(App).use(VueFullPage).mount('#app')
