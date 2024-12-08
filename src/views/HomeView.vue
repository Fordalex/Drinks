<script lang="ts">
import { defineComponent, watchEffect } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const { user, loginWithRedirect, isAuthenticated } = useAuth0();

    // Reactively watch for `user` changes
    watchEffect(() => {
      if (isAuthenticated.value && user?.value?.email) {
        window.location.href = '/Drinks/#/dashboard'; // Redirect to dashboard
      }
    });

    return { loginWithRedirect };
  },
});
</script>

<template>
  <h1>Drinks</h1>
  <p>Create an account to keep track of your favorite drinks.</p>
  <v-btn @click="loginWithRedirect" color="primary">Log In</v-btn>
</template>
