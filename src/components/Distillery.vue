<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Distillery',
  props: {
    spirit: {
      type: Object,
      required: true,
    },
  },
  computed: {
    distilleryLink(): string {
      return `/Drinks/distilleries/${this.spirit.id}`
    },
  },
})
</script>

<template>
  <div class="col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="whisky-container">
      <div class="row">
        <div class="col-8">
          <h2 class="whisky-name">{{ spirit.name }}</h2>
          <p class="whisky-description">{{ spirit.description }}</p>
          <div class="whisky-details">
            <p class="whisky-location">{{ spirit.country?.name }} - {{ spirit.region?.name }}</p>
            <br />

            <p class="whisky-info"><b>Distillery:</b> {{ spirit.distillery?.name }}<br /></p>
          </div>
        </div>

        <div class="col-4">
          <img :src="spirit.image" :alt="spirit.name" class="whisky-image" />
        </div>
      </div>

      <a :href="distilleryLink" target="_blank" class="button">More</a>
    </div>
  </div>
</template>
