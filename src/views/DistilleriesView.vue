<script lang="ts">
import { defineComponent } from 'vue'
import Distillery from '../components/Distillery.vue'
import Map from '../components/Map.vue'

export default defineComponent({
  name: 'App',
  components: {
    Distillery,
    Map,
  },
  data() {
    return {
      distilleries: [] as Array<any>, // Define the state for distilleries
      pins: [],
    }
  },
  mounted() {
    this.fetchDistilleries()
  },
  methods: {
    async fetchDistilleries() {
      try {
        const response = await fetch(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(
            'https://api.fordsdevelopment.co.uk/distilleries',
          )}`,
        )
        this.distilleries = await response.json()
        this.pins = this.distilleries
          .filter((d) => {
            if (d.lat) {
              return d
            }
          })
          .map((distillery: any) => ({
            lat: parseFloat(distillery.lat),
            lng: parseFloat(distillery.lng),
            body: `<h4>${distillery.name}</h4>
                  <ul>
                    ${distillery.spirits
                      .map(
                        (spirit: any) => `
                      <li>
                        <a href="/Drinks/#/spirits/${spirit.id}">${spirit.name}</a>
                      </li>
                    `,
                      )
                      .join('')}
                  </ul>
            `,
          }))
      } catch (error) {
        console.error('Error fetching distilleries:', error)
      }
    },
  },
})
</script>

<template>
  <div v-if="pins.length > 0">
    <Map :pins="pins" />
  </div>
  <main>
    <div v-if="distilleries.length > 0" class="row m-0 g-2 p-2">
      <Distillery v-for="(spirit, index) in distilleries" :key="index" :spirit="spirit" />
    </div>
    <p v-else>Loading distilleries...</p>
  </main>
</template>
