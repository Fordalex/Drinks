<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessTokenStore'
import Map from '../components/Map.vue'
import Company from '@/components/Company.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Map,
    Company,
  },
  setup() {
    const accessTokenStore = useAccessTokenStore();
    const companies = ref<Array<any>>([]);
    const errorMessage = ref<string | null>(null);
    const loading = ref(true);

    const fetchCompanies = async () => {
      const apiUrl = `${import.meta.env.VITE_API_URL}/companies`
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessTokenStore.accessToken}`,
        },
      })

      if (response.ok) {
        companies.value = await response.json();
        loading.value = false;
      } else {
        const responseBody = await response.json()
        errorMessage.value = responseBody.error
        loading.value = false
      }
    }

    onMounted(() => {
      fetchCompanies()
    })

    return {
      fetchCompanies,
      companies,
      errorMessage,
      loading,
    }
  }
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Companies</h1>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-if="!loading">
    <v-row>
      <v-col cols="12">
        <v-alert
          v-if="errorMessage"
          type="error"
          dismissible
          border="left"
          elevation="2"
        >
          {{ errorMessage }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-if="!loading">
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="company in companies" :key="company.id">
        <Company :company="company"></Company>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-if="loading">
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="n in 16">
        <v-skeleton-loader class="border" type="image, article"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>
