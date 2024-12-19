<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Company',
  props: {
    company: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const companyLink = computed(() => {
      return `/Drinks/#/companies/${props.company.id}`
    })

    return {
      companyLink,
    }
  }
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

    <v-img height="250" :src="company.image_link" cover></v-img>

    <v-card-item>
      <v-card-title>{{ company.name }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Local Favorite</span>

        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-item>
      <p>Brands: {{  company.brands }}</p>
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

      <div>{{ company.description || 'No description.' }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn :href="companyLink" color="deep-purple-lighten-2" text="More" block border></v-btn>
    </v-card-actions>
  </v-card>
</template>
