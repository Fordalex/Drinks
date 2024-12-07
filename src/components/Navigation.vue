<script lang="ts">
import { defineComponent } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

export default defineComponent({
  name: 'Navigation',
  data() {
    return {
      drawer: false as boolean,
    }
  },
  setup() {
    const { logout, user } = useAuth0();
    console.log(user)
    return { logout, user };
  }
})
</script>

<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app>
      <v-toolbar-title>Drinks - {{ user.given_name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Desktop Links (hidden on mobile) -->
      <div class="d-none d-md-flex">
        <v-btn router to="/">Home</v-btn>
        <v-btn router to="/distilleries">Distilleries</v-btn>
        <v-btn router to="/brands">Brands</v-btn>
        <v-btn router to="/companies">Companies</v-btn>
        <v-btn @click="logout">Logout</v-btn>
      </div>
      <!-- Mobile Drawer Toggle (hidden on desktop) -->
      <v-btn icon @click="drawer = !drawer" class="d-flex d-md-none">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="drawer" app class="d-flex d-md-none">
      <v-list>
        <v-list-item router to="/" @click="drawer = false">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item router to="/distilleries" @click="drawer = false">
          <v-list-item-title>Distilleries</v-list-item-title>
        </v-list-item>
        <v-list-item router to="/brands" @click="drawer = false">
          <v-list-item-title>Brands</v-list-item-title>
        </v-list-item>
        <v-list-item router to="/companies" @click="drawer = false">
          <v-list-item-title>Compan</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="bg-light-grey">
      <router-view />
    </v-main>
  </v-app>
</template>
