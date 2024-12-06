<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app>
      <v-toolbar-title>My App</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Desktop Links (hidden on mobile) -->
      <div class="d-none d-md-flex">
        <v-btn text router to="/">Home</v-btn>
        <v-btn text router to="/distilleries">Distilleries</v-btn>
        <v-btn text router to="/brands">Brands</v-btn>
        <v-btn text router to="/companies">Companies</v-btn>
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
          <v-list-item-title>Companies</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="bg-light-grey">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false, // Controls the mobile drawer visibility
    }
  },
}
</script>

<style>
/* Optional: Add custom styling if necessary */
</style>
