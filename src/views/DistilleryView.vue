<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Spirit from '../components/Spirit.vue'

export default defineComponent({
  name: 'App',
  data () {
    return {
      distillery: {} as any,
    }
  },
  components: {
    Spirit,
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
      <h1>{{ distillery.name }}</h1>
      <img :src="distillery.image_link" :alt="distillery.name" class="whisky-image" />
    </div>
    <p v-else>Loading distillery...</p>
    <div v-if="distillery.spirits?.length > 0" class="row m-0 g-2 p-2">
      <Spirit v-for="(spirit, index) in distillery.spirits" :key="index" :spirit="spirit" />
    </div>
    <p v-else>Loading spirits...</p>
  </main>
</template>
