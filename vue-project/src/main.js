import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import $ from 'jquery'

const app = createApp(App)

app.use(PrimeVue);
createApp(App).mount('#app')


