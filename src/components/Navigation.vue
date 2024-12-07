<script lang="ts">
import { defineComponent } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import User from './User.vue';

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
      <v-toolbar-title>Drinks - {{ user?.given_name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Desktop Links (hidden on mobile) -->
      <div class="d-none d-md-flex">
        <v-btn router to="/">Home</v-btn>
        <v-btn router to="/distilleries">Distilleries</v-btn>
        <v-btn router to="/brands">Brands</v-btn>
        <v-btn router to="/companies">Companies</v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn icon class="d-none d-md-flex">
          <User
          :initials="user?.given_name?.charAt(0) + user?.family_name?.charAt(0)"
          :full-name="user?.name"
          :email="user?.emai"
        />
      </v-btn>

      <!-- Mobile Drawer Toggle (hidden on desktop) -->
      <v-btn icon @click="drawer = !drawer" class="d-flex d-md-none">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="drawer" app class="d-flex d-md-none">
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

      <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="logout">
              Logout
            </v-btn>
          </div>
        </template>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="bg-light-grey">
      <router-view />
    </v-main>
  </v-app>
</template>
