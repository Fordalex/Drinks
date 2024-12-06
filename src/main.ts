import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons'

import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Import Vuetify styles
import '@mdi/font/css/materialdesignicons.css' // Material Design Icons
import '@fontsource/roboto' // Roboto font

const vuetify = createVuetify() // Create Vuetify instance

library.add(faStar, faStarHalfAlt, faStarEmpty)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
