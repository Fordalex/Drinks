<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import { useAccessTokenStore } from '@/stores/accessTokenStore';

export default defineComponent({
  name: 'SelectFromRequest',
  props: {
    path: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const accessTokenStore = useAccessTokenStore();

    const items = ref<string[]>([]);
    const selected = ref(props.modelValue);
    const loading = ref<boolean>(true);
    const errorMessage = ref<string | null>(null);

    const MAX_RETRIES = 3;
    let retries = 0;

    const fetchItems = async () => {
      if (!accessTokenStore.accessToken) return; // No token yet, wait until token is available

      loading.value = true;
      errorMessage.value = null;

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${props.path}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessTokenStore.accessToken}`,
          },
        });

        if (!response.ok) {
          // If it's a 500 error and we haven't exceeded retries, retry after a delay
          if (response.status === 500 && retries < MAX_RETRIES) {
            retries++;
            setTimeout(fetchItems, 500); // Retry after 2 seconds
            return;
          }

          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const mappedData = data.map((item: any) => ({ id: item['id'], name: item['name'] }));
        items.value = mappedData
        loading.value = false;
      } catch (error: any) {
        console.error('Error fetching items:', error);
        loading.value = false;
        errorMessage.value = error instanceof Error ? error.message : String(error);
      }
    };

    const handleChange = (event: Event) => {
      console.log('handleChange', event);
      console.log('value', selected.value);
      const target = event.target as HTMLSelectElement;
      selected.value = selected.value;
      emit('update:modelValue', selected.value);
    };

    // Fetch data once path changes and when token becomes available
    watch(
      () => props.path,
      () => {
        if (accessTokenStore.accessToken) {
          fetchItems();
        }
      },
      { immediate: true }
    );

    // Watch for token availability
    watch(
      () => accessTokenStore.accessToken,
      (newToken) => {
        if (newToken) {
          fetchItems();
        }
      },
      { immediate: true }
    );

    // Update selected value when the value prop changes
    watch(
      () => props.value,
      (newValue) => {
        selected.value = newValue;
      }
    );

    return {
      items,
      selected,
      handleChange,
      loading,
      errorMessage,
    };
  },
});
</script>

<template>
  <label class="block text capitalize">{{ $props.path.replace('_', ' ') }}</label>

  <v-select
    v-model="selected"
    :items="items"
    item-title="name"
    item-value="id"
    @update:modelValue="handleChange"
    :loading="loading"
    :error-messages="errorMessage"
    :name="$props.name"
    outlined
    dense
    clearable
  ></v-select>
</template>
