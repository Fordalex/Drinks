<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useAccessTokenStore } from '@/stores/accessTokenStore'; // Access token store for authenticated requests
import SpiritForm from './SpiritForm.vue';

interface SpiritInteface {
  name: string;
  description: string;
  image: string;
  id: number;
}

export default defineComponent({
  name: 'Spirit',
  props: {
    spirit: {
      type: Object as () => SpiritInteface,
      required: true,
    },
  },
  components: {
    SpiritForm,
  },
  setup(props) {
    const editedSpirit = ref({ ...props.spirit }); // Local copy for editing
    const accessTokenStore = useAccessTokenStore();

    // Compute the endpoint for the API request
    const endpoint = computed(() => `${import.meta.env.VITE_API_URL}/spirits/${props.spirit.id}`);

    // Save changes to the backend
    const saveChanges = async ({ data, endpoint }: { data: object; endpoint: string }) => {
      try {
        const response = await fetch(endpoint, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessTokenStore.accessToken}`, // Include the access token
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const updatedSpirit = await response.json();
        console.log('Save successful:', updatedSpirit);

        // Update local data after saving
        editedSpirit.value = updatedSpirit;

        // Reload the page to reflect the latest data
        window.location.reload();
      } catch (error) {
        console.error('Error saving spirit:', error);
      }
    };

    return {
      editedSpirit,
      saveChanges,
      endpoint,
    };
  },
});
</script>

<template>
  <v-card>
    <v-col cols="12">
      <SpiritForm :spirit="spirit">
        <template #trigger="{ openDialog }">
          <v-btn
            density="comfortable"
            icon="mdi-dots-vertical"
            variant="tonal"
            @click="openDialog"
          ></v-btn>
        </template>
      </SpiritForm>
    </v-col>

    <div class="image-container">
      <v-img height="250" :src="spirit.image" contain></v-img>
    </div>

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
  </v-card>
</template>
