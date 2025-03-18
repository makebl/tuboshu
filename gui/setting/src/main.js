import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import autoHeight from "@/plugins/autoHeight.js";

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(autoHeight)

app.mount('#app')
