<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SpiritLink',
  props: {
    spirit: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const spiritLink = computed(() => {
      return `/Drinks/#/spirits/${props.spirit.id}`
    })

    return {
      spiritLink,
    }
  }
})
</script>

<template>
  <router-link :to="{ name: 'spirit', params: { id: spirit.id } }">
    {{ spirit.name }}
  </router-link>
</template>
