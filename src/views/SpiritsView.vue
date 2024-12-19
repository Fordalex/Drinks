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
    const selectedDistillery = ref<Array<any>>([]);

    const fetchSpirits = async () => {
      const accessTokenStore = useAccessTokenStore()
      const apiUrl = `${import.meta.env.VITE_API_URL}/spirits`
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessTokenStore.accessToken}`,
        },
      })


      if (response.ok) {
        loading.value = false;
        spirits.value = await response.json();
      } else {
        loading.value = false
        const responseBody = await response.json();
        errorMessage.value = responseBody.error;
        if (responseBody.error === "Access token has expired or is invalid.") {
          console.log('Access token has expired or is invalid.')
          accessTokenStore.$reset()
          accessTokenStore.clearState()
        }
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
      selectedSpiritStyle,
      selectedDistillery,
    }
  },
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <h1>Drinks</h1>
      </v-col>

      <v-col cols="6" class="text-right">
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
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3">
        <SelectFromRequest
          path="spirit_types"
          key="name"
          v-model="selectedSpiritType"
        />
      </v-col>

      <v-col cols="3">
        <SelectFromRequest
          path="spirit_styles"
          key="name"
          v-model="selectedSpiritStyle"
        />
      </v-col>

      <v-col cols="3">
        <SelectFromRequest
          path="distilleries"
          key="name"
          v-model="selectedDistillery"
        />
      </v-col>

      <v-col cols="3" class="d-flex align-center">
        <v-btn
          @click="fetchSpirits"
          color="primary"
          class="width-100"
          dark
          elevation="2"
        >
          Search
        </v-btn>
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
