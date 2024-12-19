<script lang="ts">
import { defineComponent } from 'vue'
import { useAccessTokenStore } from '@/stores/accessTokenStore'
import Distillery from '../components/Distillery.vue'
import Map from '../components/Map.vue'
import DistilleryForm from '../components/DistilleryForm.vue'

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
    DistilleryForm,
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
      const accessTokenStore = useAccessTokenStore()
      const apiUrl = `${import.meta.env.VITE_API_URL}/distilleries`
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessTokenStore.accessToken}`,
        },
      })

      if (response.ok) {
        this.distilleries = await response.json()
        this.pins = this.distilleries.filter((d) => {
          if (d.lat) {
            return d
          }
        }).map((distillery: any) => ({
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
          `
        }));
      } else {
        const responseBody = await response.json()
        console.error(responseBody.error)
        if (responseBody.error === 'Access token has expired or is invalid.') {
          console.log('Access token has expired or is invalid.')
          accessTokenStore.$reset()
          accessTokenStore.clearState()
        }
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
          <v-col cols="6">
            <h1>Distilleries</h1>
          </v-col>

          <v-col cols="6" class="text-right">
            <DistilleryForm :distillery="distillery">
              <template #trigger="{ openDialog }">
                <v-btn
                  density="comfortable"
                  variant="tonal"
                  text="New Distillery"
                  @click="openDialog"
                ></v-btn>
              </template>
            </DistilleryForm>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            sm="3"
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
