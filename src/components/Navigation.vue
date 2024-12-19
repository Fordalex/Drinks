<script lang="ts">
import { defineComponent } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'
import User from './User.vue'
import { useAccessTokenStore } from '@/stores/accessTokenStore'

export default defineComponent({
  name: 'Navigation',
  data() {
    return {
      drawer: false as boolean,
    }
  },
  components: {
    User,
  },
  setup() {
    const { logout, user } = useAuth0()

    const accessTokenStore = useAccessTokenStore()

    const logoutAndClearState = async () => {
      // Clear local Pinia state
      accessTokenStore.$reset()
      accessTokenStore.clearState()

      // Clear browser's localStorage or cookies if used
      localStorage.clear()
      sessionStorage.clear()

      // Perform Auth0 logout
      await logout()
    }

    return { logout, user, logoutAndClearState }
  },
})
</script>

<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-navigation-drawer expand-on-hover rail>
          <v-list>
            <v-list-item
              :prepend-avatar="user?.picture"
              :subtitle="user?.email"
              :title="user?.name"
            ></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item
              prepend-icon="mdi-view-dashboard"
              title="Dashboard"
              value="Dashboard"
              router
              to="/dashboard"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-card-account-details"
              title="Companies"
              value="Companies"
              router
              to="/companies"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-watermark"
              title="Brands"
              value="Brands"
              router
              to="/brands"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-factory"
              title="Distilleries"
              value="Distilleries"
              router
              to="/distilleries"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-liquor"
              title="Spirits"
              value="Spirits"
              router
              to="/spirits"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main class="bg-light-grey page-container">
          <div class="d-flex d-lg-none"><br /><br /><br /></div>
          <router-view />
        </v-main>
      </v-layout>
    </v-card>

    <!-- App Bar -->
    <v-app-bar app class="d-flex d-lg-none">
      <!-- Mobile Drawer Toggle (hidden on desktop) -->
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="drawer" app class="d-flex d-lg-none">
      <template v-slot:prepend>
        <v-list-item
          lines="two"
          :prepend-avatar="user?.picture"
          subtitle="Logged in"
          :title="user?.name"
        ></v-list-item>
      </template>

      <v-divider></v-divider>
      <v-list>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          router
          to="/dashboard"
          @click="drawer = false"
        >
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item prepend-icon="mdi-card-account-details" router to="/companies" @click="drawer = false">
          <v-list-item-title>Companies</v-list-item-title>
        </v-list-item>
        <v-list-item prepend-icon="mdi-watermark" router to="/brands" @click="drawer = false">
          <v-list-item-title>Brands</v-list-item-title>
        </v-list-item>
        <v-list-item prepend-icon="mdi-factory" router to="/distilleries" @click="drawer = false">
          <v-list-item-title>Distilleries</v-list-item-title>
        </v-list-item>
        <v-list-item prepend-icon="mdi-liquor" router to="/spirits" @click="drawer = false">
          <v-list-item-title>Spirits</v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logoutAndClearState"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-app>
</template>
