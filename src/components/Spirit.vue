<script lang="ts">
import { defineComponent } from 'vue'
import Rating from './Rating.vue'

export default defineComponent({
  name: 'Spirit',
  props: {
    spirit: {
      type: Object,
      required: true,
    },
  },
  components: {
    Rating,
  },
  methods: {
    distilleries(distilleries: any[]) {
      return distilleries.map((distillery) => distillery.name).join(', ')
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
            <br /><br />
          </div>
        </div>

        <div class="col-4">
          <img :src="spirit.image" :alt="spirit.name" class="whisky-image" />
        </div>
      </div>

      <p class="whisky-info"><b>Distilleries:</b> {{ distilleries(spirit.distilleries) }}</p>
      <p class="whisky-info"><b>Rating:</b><Rating :number="spirit.rating"/></p>
      <p class="whisky-info"><b>Type:</b> {{ spirit.type }}</p>
      <p class="whisky-info"><b>Price:</b> £{{ spirit.price }}.00</p>
      <p class="whisky-info"><b>Flavour:</b> {{ spirit.flavour }}</p>
      <p class="whisky-info"><b>Brand:</b> {{ spirit.brand }}</p>
      <p class="whisky-info"><b>Cask:</b> {{ spirit.cask }}</p>

      <p class="whisky-review"><strong>Review:</strong> {{ spirit.review }}</p>

      <a :href="spirit.link" target="_blank" class="button">Info</a>
    </div>
  </div>
</template>
