<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navigation',
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/distilleries">Distilleries</RouterLink>
        <RouterLink to="/brands">Brands</RouterLink>
        <RouterLink to="/companies">Companies</RouterLink>
      </nav>
    </div>
  </header>
</template>
