<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  data () {
    return {
      distillery: {} as any,
    }
  },
  mounted() {
    this.fetchDistillery()
  },
  methods: {
    async fetchDistillery() {
      const route = useRoute()
      const id = route.params.id;
      try {
        const response = await fetch(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(
            `https://api.fordsdevelopment.co.uk/distilleries/${id}`
          )}`
        )
        console.log(response)
        this.distillery = await response.json()
      } catch (error) {
        console.error('Error fetching distillery:', error)
      }
    },
  },
})
</script>

<template>
  <main>
    <div v-if="distillery?.id" class="row m-0 g-2 p-2">
      {{ distillery }}
    </div>
    <p v-else>Loading distillery...</p>
  </main>
</template>
