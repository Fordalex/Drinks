<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import RecordForm from './RecordForm.vue';
import { useAccessTokenStore } from '@/stores/accessTokenStore';
import SelectFromRequest from '@/components/SelectFromRequest.vue';

export interface Distillery {
  id?: number; // Optional for new records
  name: string;
  description: string;
  image: string;
  rating: number;
}

export default defineComponent({
  name: 'DistilleryForm',
  props: {
    distillery: {
      type: Object as () => Distillery,
      required: false, // Optional for adding new records
      default: () => (
        {
          name: '',
          image: '',
        }
      ), // Default values for new records
    },
  },
  components: {
    RecordForm,
    SelectFromRequest
  },
  setup(props) {
    const accessTokenStore = useAccessTokenStore();
    const value = ref<string[]>([]);

    // Determine if we're editing or adding a new record
    const isEditMode = computed(() => !!props.distillery.id);

    // Compute the endpoint and HTTP method
    const endpoint = computed(() =>
      isEditMode.value
        ? `${import.meta.env.VITE_API_URL}/distilleries/${props.distillery.id}` // Edit endpoint
        : `${import.meta.env.VITE_API_URL}/distilleries` // Add endpoint
    );
    const method = computed(() => (isEditMode.value ? 'PUT' : 'POST'));

    // Handle save event
    const handleSave = async (savedRecord: Distillery) => {
      console.log(`${isEditMode.value ? 'Updated' : 'Created'} record:`, savedRecord);

      // Reload the page to reflect the changes
      window.location.reload();
    };

    return {
      isEditMode,
      endpoint,
      method,
      handleSave,
      value
    };
  },
});
</script>

<template>
  <RecordForm
    :record="distillery"
    :endpoint="endpoint"
    :method="method"
    @save="handleSave"
  >
    <template #trigger="{ openDialog }">
      <slot name="trigger" :openDialog="openDialog">
        <v-btn color="primary">{{ isEditMode ? 'Edit Spirit' : 'Add Distillery' }}</v-btn>
      </slot>
    </template>
    <template #title>
      <span>{{ isEditMode ? 'Edit Distillery' : 'Add New Distillery' }}</span>
    </template>
    <template #form="{ record }">
      <v-form>
        <v-text-field v-model="record.name" label="Name" required></v-text-field>

        <v-text-field v-model="record.image_link" label="Image"></v-text-field>

        <v-text-field v-model="record.lng" label="Longitude"></v-text-field>

        <v-text-field v-model="record.lat" label="Latitude"></v-text-field>

        <SelectFromRequest
          path="regions"
          key="name"
          name="region_id"
          v-model="record.region_id"
        />
      </v-form>
    </template>
  </RecordForm>
</template>
