<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";

export default defineComponent({
  name: "Spirit",
  props: {
    spirit: {
      type: Object,
      required: true,
    },
  },
})
</script>


<template>
  <div class="whisky-container">
    <div class="row">
      <div class="col-8">
        <h2 class="whisky-name">{{ spirit.name }}</h2>
        <p class="whisky-description">{{ spirit.description }}</p>
        <div class="whisky-details">
          <p class="whisky-location">{{ spirit.country }} - {{ spirit.region }}</p>

          <br />
          <br /><br />

          <p class="whisky-info"><b>Type:</b> {{ spirit.type }}<br /></p>
          <p class="whisky-info"><b>Price:</b> £{{ spirit.price }}.00<br /></p>
          <p class="whisky-info"><b>Flavour:</b> {{ spirit.flavour }}<br /></p>
          <p class="whisky-info"><b>Brand:</b> {{ spirit.brand }}<br /></p>
          <p class="whisky-info"><b>Cask:</b> {{ spirit.cask }}<br /></p>
        </div>
      </div>

      <div class="col-4">
        <img :src="spirit.image" :alt="spirit.name" class="whisky-image" />
      </div>
    </div>

    <p class="whisky-review">
      <strong>Review:</strong> {{ spirit.review }}
    </p>

    <a :href="spirit.link" target="_blank" class="button">Info</a>
  </div>
</template>
