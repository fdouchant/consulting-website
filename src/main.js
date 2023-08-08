import { createApp } from 'vue'

// imports
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

import './style.scss'
import App from '@/App.vue'
createApp(App).use(VueFullPage).mount('#app')