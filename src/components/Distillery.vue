<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Distillery',
  props: {
    distillery: {
      type: Object,
      required: true,
    },
  },
  computed: {
    distilleryLink(id: any): string {
      return `/Drinks/#/distilleries/${id}`
    },
  },
})
</script>

<template>
  <v-card>
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

      <div>{{ distillery.description || 'No description.' }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple-lighten-2" text="More" block border></v-btn>
    </v-card-actions>
  </v-card>
</template>
