<script lang="ts">
import { defineComponent } from 'vue'
import { usePasswordStore } from '@/stores/passwordStore'
import Spirit from '../components/Spirit.vue'
import Map from '../components/Map.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Spirit,
    Map,
  },
  data() {
    return {
      spirits: [] as Array<any>,
      pins: [
        { lat: 37.7749, lng: -122.4194 }, // San Francisco
        { lat: 34.0522, lng: -118.2437 }, // Los Angeles
        { lat: 40.7128, lng: -74.006 }, // New York City
      ],
    }
  },
  mounted() {
    this.fetchSpirits()
  },
  methods: {
    async fetchSpirits() {
      try {
        const passwordStore = usePasswordStore()
        const response = await fetch(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(
            `https://api.fordsdevelopment.co.uk/drinks/spirits?password=${passwordStore.password}`,
          )}`,
        )
        this.spirits = await response.json()
      } catch (error) {
        console.error('Error fetching spirits:', error)
      }
    },
  },
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" v-for="(spirit, index) in spirits" :key="index" :spirit="spirit">
        <v-card :disabled="loading" :loading="loading">
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" :src="spirit.image" cover></v-img>

          <v-card-item>
            <v-card-title>{{ spirit.name }}</v-card-title>

            <v-card-subtitle>
              <span class="me-1">Local Favorite</span>

              <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :model-value="4.5"
                color="amber"
                density="compact"
                size="small"
                half-increments
                readonly
              ></v-rating>

              <div class="text-grey ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

            <div>{{ spirit.description || 'No description.' }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple-lighten-2" text="More" block border @click="reserve"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
