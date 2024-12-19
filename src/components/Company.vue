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

    const brands = computed(() => {
      return props.company.brands.map((brand: any) => brand.name).join(', ')
    })

    return {
      companyLink,
      brands,
    }
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

    <v-img height="250" :src="company.image_link" cover></v-img>

    <v-card-item>
      <v-card-title>{{ company.name }}</v-card-title>
    </v-card-item>

    <v-card-item>
      <p>Brands: {{ brands }}</p>
    </v-card-item>

    <v-card-actions>
      <v-btn :href="companyLink" color="deep-purple-lighten-2" text="More" block border></v-btn>
    </v-card-actions>
  </v-card>
</template>
