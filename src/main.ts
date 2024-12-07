import './assets/main.css'

import { createAuth0 } from '@auth0/auth0-vue';
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
app.use(
  createAuth0({
    domain: 'dev-n2zhod4kjh1i0uee.us.auth0.com',
    clientId: 'lQymiZduIdaEjZacgbwdT5x3kgBMJIQN',
    authorizationParams: {
      redirect_uri: 'http://localhost:5173/Drinks/'
    }
  })
);

app.mount('#app')
