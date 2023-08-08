import { createApp } from 'vue'

import '@/style.scss'

// imports
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

import App from '@/App.vue'
createApp(App).use(VueFullPage).mount('#app')