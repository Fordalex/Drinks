<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessTokenStore'
import { useAuth0 } from '@auth0/auth0-vue'
import Spirit from '../components/Spirit.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Spirit,
  },
  setup() {
    const spirits = ref<Array<any>>([]);
    const loading = ref(true);

    const fetchSpirits = async () => {
      try {
        const accessTokenStore = useAccessTokenStore()
        const apiUrl = `${import.meta.env.VITE_API_URL}/spirits`
        if (!accessTokenStore.accessToken) {
          console.error('No access token available')
          return
        }
        const response = await fetch(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessTokenStore.accessToken}`,
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        spirits.value = await response.json()
        loading.value = false
      } catch (error) {
        console.error('Error fetching spirits:', error)
      }
    }

    onMounted(() => {
      fetchSpirits()
    })

    return {
      spirits,
      loading,
    }
  },
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Spirits</h1>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-if="!loading">
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="(spirit, index) in spirits" :key="index" :spirit="spirit">
        <Spirit :spirit="spirit" />
      </v-col>
    </v-row>
  </v-container>

  <v-container v-if="loading">
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="n in 16">
        <v-skeleton-loader
          class="border"
          type="image, article"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>
