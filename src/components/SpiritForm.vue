<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import RecordForm from './RecordForm.vue';
import { useAccessTokenStore } from '@/stores/accessTokenStore';

export interface Spirit {
  id?: number; // Optional for new records
  name: string;
  description: string;
  image: string;

}

export default defineComponent({
  name: 'SpiritForm',
  props: {
    spirit: {
      type: Object as () => Spirit,
      required: false, // Optional for adding new records
      default: () => ({ name: '', description: '', image: '' }), // Default values for new records
    },
  },
  components: {
    RecordForm,
  },
  setup(props) {
    const accessTokenStore = useAccessTokenStore();
    const items = ['Vanilla', 'Caramel', 'Spicy', 'Fruity', 'Floral', 'Herbal', 'Smoky', 'Woody'];
    const value = ref<string[]>([]);

    // Determine if we're editing or adding a new record
    const isEditMode = computed(() => !!props.spirit.id);

    // Compute the endpoint and HTTP method
    const endpoint = computed(() =>
      isEditMode.value
        ? `${import.meta.env.VITE_API_URL}/spirits/${props.spirit.id}` // Edit endpoint
        : `${import.meta.env.VITE_API_URL}/spirits` // Add endpoint
    );
    const method = computed(() => (isEditMode.value ? 'PUT' : 'POST'));

    // Handle save event
    const handleSave = async (savedRecord: Spirit) => {
      console.log(`${isEditMode.value ? 'Updated' : 'Created'} record:`, savedRecord);

      // Reload the page to reflect the changes
      window.location.reload();
    };


    // const spiritTypes = async () => {
    //   const url = `${import.meta.env.VITE_API_URL}/spirit_types`;

    //   try {
    //     const response = await fetch(url, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${accessTokenStore.accessToken}`, // Include the access token
    //       },
    //     });

    //     if (!response.ok) {
    //       throw new Error(`Error: ${response.status} - ${response.statusText}`);
    //     }

    //     console.log('Spirit Types:', response);
    //   } catch (error) {
    //     console.error('Error saving spirit:', error);
    //   }
    // }
    // spiritTypes();

    return {
      isEditMode,
      endpoint,
      method,
      handleSave,
      items,
      value,
    };
  },
});
</script>

<template>
  <RecordForm
    :record="spirit"
    :endpoint="endpoint"
    :method="method"
    @save="handleSave"
  >
    <template #trigger="{ openDialog }">
      <slot name="trigger" :openDialog="openDialog">
        <v-btn color="primary">{{ isEditMode ? 'Edit Spirit' : 'Add Spirit' }}</v-btn>
      </slot>
    </template>
    <template #title>
      <span>{{ isEditMode ? 'Edit Spirit' : 'Add New Spirit' }}</span>
    </template>
    <template #form="{ record }">
      <v-form>
        <v-text-field v-model="record.name" label="Name" required></v-text-field>

        <v-textarea
          v-model="record.description"
          label="Description"
          rows="4"
          required
        ></v-textarea>

        <v-text-field v-model="record.image" label="Image"></v-text-field>

        <v-text-field v-model="record.rating" label="Rating"></v-text-field>

        <v-text-field v-model="record.ppm" label="Ppm"></v-text-field>

        <v-autocomplete
          v-model="value"
          :items="items"
          label="Searchable Chips"
          chips
          multiple
        ></v-autocomplete>
      </v-form>
    </template>
  </RecordForm>
</template>
