<script lang="ts">
import { defineComponent, computed } from 'vue'
import CompanyForm from './CompanyForm.vue';

export default defineComponent({
  name: 'Company',
  props: {
    company: {
      type: Object,
      required: true,
    },
  },
  components: {
    CompanyForm,
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
    <v-col cols="12">
      <CompanyForm :company="company">
        <template #trigger="{ openDialog }">
          <v-btn
            density="comfortable"
            icon="mdi-dots-vertical"
            variant="tonal"
            @click="openDialog"
          ></v-btn>
        </template>
      </CompanyForm>
    </v-col>

    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="company.logo" cover></v-img>

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
