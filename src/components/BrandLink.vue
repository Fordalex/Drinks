<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrandLink',
  props: {
    brand: {
      type: Object,
      required: true,
    },
  },
})
</script>

<template>
  <div>
    <router-link :to="{ name: 'brands', params: { id: brand.id } }">
      {{ brand.name }}
    </router-link>
  </div>
</template>
