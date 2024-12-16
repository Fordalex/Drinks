<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import type { PropType } from 'vue';
import { useAccessTokenStore } from '@/stores/accessTokenStore';
import SpiritForm from './SpiritForm.vue';

// Export the interface
export interface SpiritInterface {
  name: string;
  description: string;
  image: string;
  rating: number;
  id: number;
  distilleries: any[];
  spirit_type: any;
  spirit_style: any;
  ppm: number;
}

export default defineComponent({
  name: 'Spirit',
  props: {
    spirit: {
      type: Object as PropType<SpiritInterface>, // Use PropType
      required: true,
    },
  },
  components: {
    SpiritForm,
  },
  setup(props) {
    const editedSpirit = ref({ ...props.spirit });
    const accessTokenStore = useAccessTokenStore();

    const endpoint = computed(() => `${import.meta.env.VITE_API_URL}/spirits/${props.spirit.id}`);

    const saveChanges = async ({ data, endpoint }: { data: object; endpoint: string }) => {
      try {
        const response = await fetch(endpoint, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessTokenStore.accessToken}`,
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const updatedSpirit = await response.json();
        editedSpirit.value = updatedSpirit;
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

    <!-- <v-chip-group class="px-4">
        <v-chip density="comfortable" size="small">Vanilla</v-chip>
        <v-chip density="comfortable" size="small">Black Berry</v-chip>
        <v-chip density="comfortable" size="small">Smokey</v-chip>
        <v-chip density="comfortable" size="small">Nut</v-chip>
      </v-chip-group> -->

    <v-card-item>
      <v-card-title>{{ spirit.name }}</v-card-title>

      <!-- <v-card-subtitle>
        <span class="me-1">Local Favorite</span>
        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle> -->
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="spirit.rating"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>
        <!-- <div class="text-grey ms-4">4.5 (413)</div> -->
      </v-row>

      <p class="my-4 text-subtitle-1 spirit-factory">
        <v-icon
          color="black"
          icon="mdi-factory"
          size="large"
        ></v-icon>
        {{ spirit.distilleries.map((d) => d.name).join(', ') || 'No distillery.' }}
      </p>

      <div>
        <v-chip
          class="mb-2 mr-2"
          :color="spirit.spirit_type.colour"
          size="small"
          label
        >
          <v-icon :icon="spirit.spirit_type.icon" start></v-icon>
          {{ spirit.spirit_type.name }}
        </v-chip>

        <v-chip
          class="mb-2 mr-2"
          :color="spirit.spirit_type.colour"
          size="small"
          label
        >
          <v-icon :icon="spirit.spirit_style.icon" start></v-icon>
          {{ spirit.spirit_style.name }}
        </v-chip>

        <v-chip
          class="mb-2"
          color="#8c4f00"
          size="small"
          label
          v-if="spirit.ppm"
        >
          <v-icon icon="mdi mdi-smoke" start></v-icon>
          {{ spirit.ppm }}
        </v-chip>
      </div>

      <div>{{ spirit.description || 'No description.' }}</div>
    </v-card-text>
  </v-card>
</template>
