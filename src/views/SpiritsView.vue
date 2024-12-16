<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessTokenStore'
import Spirit from '../components/Spirit.vue'
import SpiritForm from '@/components/SpiritForm.vue'
import SelectFromRequest from '@/components/SelectFromRequest.vue'


export default defineComponent({
  name: 'SpiritsView',
  components: {
    Spirit,
    SpiritForm,
    SelectFromRequest,
  },
  setup() {
    const spirits = ref<Array<any>>([]);
    const loading = ref(true);
    const endpoint = computed(() => `${import.meta.env.VITE_API_URL}/spirits`);
    const errorMessage = ref<string | null>(null);
    const selectedSpiritType = ref<Array<any>>([]);
    const selectedSpiritStyle = ref<Array<any>>([]);

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

        spirits.value = await response.json();
        console.log('Spirits:', spirits.value);
        loading.value = false;
      } catch (error) {
        console.log(error)
        loading.value = false;
        errorMessage.value = error;
      }
    }

    onMounted(() => {
      fetchSpirits()
    })

    return {
      spirits,
      loading,
      endpoint,
      errorMessage,
      selectedSpiritType,
      selectedSpiritStyle
    }
  },
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Drinks</h1>

        <SpiritForm :spirit="spirit">
          <template #trigger="{ openDialog }">
            <v-btn
              density="comfortable"
              variant="tonal"
              text="New Spirit"
              @click="openDialog"
            ></v-btn>
          </template>
        </SpiritForm>

        <SelectFromRequest
          path="spirit_types"
          key="name"
          v-model="selectedSpiritType"
        />

        <SelectFromRequest
          path="spirit_styles"
          key="name"
          v-model="selectedSpiritStyle"
        />
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

    <v-row>
      <v-col cols="12">
        <p v-if="spirits.length == 0">You currently have no drinks registered, press the button above to add drinks.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(spirit, index) in spirits"
        :key="index"
        :spirit="spirit"
      >
        <Spirit :spirit="spirit" />
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
