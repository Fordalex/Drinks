<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import RecordForm from './RecordForm.vue';
import { useAccessTokenStore } from '@/stores/accessTokenStore';
import SelectFromRequest from '@/components/SelectFromRequest.vue';

export interface Spirit {
  id?: number; // Optional for new records
  name: string;
  description: string;
  image: string;
  rating: number;
}

export default defineComponent({
  name: 'SpiritForm',
  props: {
    spirit: {
      type: Object as () => Spirit,
      required: false, // Optional for adding new records
      default: () => (
        {
          name: '',
          description: '',
          image: '',
          rating: 0,
          spirit_type_id: null,
          spirit_style_id: null,
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
    const items = ['Vanilla', 'Caramel', 'Spicy', 'Fruity', 'Floral', 'Herbal', 'Smoky', 'Woody'];
    const value = ref<string[]>([]);
    const selectedSpiritType = ref<string>('');
    const selectedSpiritStyle = ref<string>('');
    const selectedDistillery = ref<string>('');

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

    return {
      isEditMode,
      endpoint,
      method,
      handleSave,
      items,
      value,
      selectedSpiritType,
      selectedSpiritStyle,
      selectedDistillery,
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

        <SelectFromRequest
          path="spirit_types"
          key="name"
          name="spirit_type_id"
          v-model="record.spirit_type_id"
        />

        <SelectFromRequest
          path="spirit_styles"
          key="name"
          name="spirit_style_id"
          v-model="record.spirit_style_id"
        />

        <SelectFromRequest
          path="distilleries"
          key="name"
          name="distillery_id"
          :multiple="true"
          v-model="record.distillery_ids"
        />
      </v-form>
    </template>
  </RecordForm>
</template>
