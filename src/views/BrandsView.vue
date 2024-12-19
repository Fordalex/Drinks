<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useAccessTokenStore } from '@/stores/accessTokenStore'
import BrandForm from '@/components/BrandForm.vue'
import Brand from '@/components/Brand.vue'

export default defineComponent({
  name: 'BrandsView',
  components: {
    BrandForm,
    Brand,
  },
  setup() {
    const brands = ref<Array<any>>([])
    const loading = ref(true)
    const endpoint = computed(() => `${import.meta.env.VITE_API_URL}/brands`)
    const errorMessage = ref<string | null>(null)

    const fetchBrands = async () => {
      const accessTokenStore = useAccessTokenStore()
      const apiUrl = `${import.meta.env.VITE_API_URL}/brands`
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessTokenStore.accessToken}`,
        },
      })

      if (response.ok) {
        loading.value = false
        brands.value = await response.json()
      } else {
        loading.value = false
        const responseBody = await response.json()
        errorMessage.value = responseBody.error
        if (responseBody.error === 'Access token has expired or is invalid.') {
          console.log('Access token has expired or is invalid.')
          accessTokenStore.$reset()
          accessTokenStore.clearState()
        }
      }
    }

    onMounted(() => {
      fetchBrands()
    })

    return {
      brands,
      loading,
      endpoint,
      errorMessage,
    }
  },
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <h1>Brands</h1>
      </v-col>

      <v-col cols="6" class="text-right">
        <BrandForm>
          <template #trigger="{ openDialog }">
            <v-btn
              density="comfortable"
              variant="tonal"
              text="New Brand"
              @click="openDialog"
            ></v-btn>
          </template>
        </BrandForm>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="brand in brands" :key="brand.id">
        <Brand :brand="brand"></Brand>
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
