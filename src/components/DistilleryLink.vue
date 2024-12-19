<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'DistilleryLink',
  props: {
    distillery: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const distillery = ref({ ...props.distillery })

    const endpoint = computed(
      () => `${import.meta.env.VITE_API_URL}/distilleries/${props.distillery.id}`,
    )

    return {
      distillery,
      endpoint,
    }
  },
})
</script>

<template>
  <p class="text-subtitle-1 spirit-factory">
    <v-icon color="black" icon="mdi-factory" size="large" class="mr-2"></v-icon>
    <router-link :to="{ name: 'distillery', params: { id: distillery.id } }">
      {{ distillery.name }}
    </router-link>
  </p>
</template>
