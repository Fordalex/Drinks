import './assets/main.css'

import { createAuth0 } from '@auth0/auth0-vue'
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
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
      redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI,
    },
  }),
)

app.mount('#app')
