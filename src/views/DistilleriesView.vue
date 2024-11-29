<script setup lang="ts">
import Distillery from '../components/Distillery.vue'
import { ref, onMounted } from 'vue'

const spirits = ref([])

onMounted(async () => {
  try {
    const response = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(
        'https://api.fordsdevelopment.co.uk/distilleries',
      )}`,
    )
    console.log(response)
    spirits.value = await response.json()
  } catch (error) {
    console.error('Error fetching spirits:', error)
  }
})
</script>

<template>
  <main>
    <div v-if="spirits.length > 0" class="row m-0 g-2 p-2">
      <Distillery v-for="(spirit, index) in spirits" :key="index" :spirit="spirit" />
    </div>
    <p v-else>Loading spirits...</p>
  </main>
</template>
