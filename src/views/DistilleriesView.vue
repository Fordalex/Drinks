<script lang="ts">
import { defineComponent } from 'vue'
import { usePasswordStore } from '@/stores/passwordStore'
import Distillery from '../components/Distillery.vue'
import Map from '../components/Map.vue'

interface Pin {
  lat: number
  lng: number
  body: string
}

export default defineComponent({
  name: 'App',
  components: {
    Distillery,
    Map,
  },
  data() {
    return {
      distilleries: [] as Array<any>, // Define the state for distilleries
      pins: [] as Array<Pin>, // Define the state for pins
    }
  },
  mounted() {
    this.fetchDistilleries()
  },
  methods: {
    async fetchDistilleries() {
      try {
        const passwordStore = usePasswordStore()
        const response = await fetch(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(
            `https://api.fordsdevelopment.co.uk/drinks/distilleries?password=${passwordStore.password}`,
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
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="4"
            v-for="(distillery, index) in distilleries"
            :key="index"
            :distillery="distillery"
          >
            <Distillery :distillery="distillery" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <p v-else>Loading distilleries...</p>
  </main>
</template>
