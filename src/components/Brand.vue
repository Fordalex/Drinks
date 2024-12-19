<script lang="ts">
import { defineComponent, computed } from 'vue'
import BrandForm from './BrandForm.vue';

export default defineComponent({
  name: 'Brand',
  props: {
    brand: {
      type: Object,
      required: true,
    },
  },
  components: {
    BrandForm,
  },
  setup(props) {
    const brandLink = computed(() => {
      return `/Drinks/#/brands/${props.brand.id}`
    })

    return {
      brandLink,
    }
  },
})
</script>

<template>
  <v-card>
    <v-col cols="12">
      <BrandForm :brand="brand">
        <template #trigger="{ openDialog }">
          <v-btn
            density="comfortable"
            icon="mdi-dots-vertical"
            variant="tonal"
            @click="openDialog"
          ></v-btn>
        </template>
      </BrandForm>
    </v-col>

    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-item>
      <v-card-title>{{ brand.name }}</v-card-title>
    </v-card-item>

    <v-card-item>
      <v-card-subtitle>Company: {{ brand.company?.name }}</v-card-subtitle>
    </v-card-item>

    <v-card-actions>
      <v-btn :href="brandLink" color="deep-purple-lighten-2" text="More" block border></v-btn>
    </v-card-actions>
  </v-card>
</template>
