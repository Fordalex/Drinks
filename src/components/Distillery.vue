<script lang="ts">
import { defineComponent, computed } from 'vue'
import DistilleryForm from './DistilleryForm.vue'

export default defineComponent({
  name: 'Distillery',
  props: {
    distillery: {
      type: Object,
      required: true,
    },
  },
  components: {
    DistilleryForm,
  },
  setup(props) {
    const distilleryLink = computed(() => {
      return `/Drinks/#/distilleries/${props.distillery.id}`
    })

    return {
      distilleryLink,
    }
  },
})
</script>

<template>
  <v-card>
    <v-col cols="12">
      <DistilleryForm :distillery="distillery">
        <template #trigger="{ openDialog }">
          <v-btn
            density="comfortable"
            icon="mdi-dots-vertical"
            variant="tonal"
            @click="openDialog"
          ></v-btn>
        </template>
      </DistilleryForm>
    </v-col>

    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="distillery.image_link" cover></v-img>

    <v-card-item>
      <v-card-title>{{ distillery.name }}</v-card-title>

      <p>Region: {{ distillery.region?.name }}</p>
    </v-card-item>

    <v-card-actions>
      <v-btn :href="distilleryLink" color="deep-purple-lighten-2" text="More" block border></v-btn>
    </v-card-actions>
  </v-card>
</template>
