<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Rating',
  props: {
    number: {
      type: Number,
      required: true,
      validator: (value: number) => value >= 0 && value <= 10, // Validate the range
    },
  },
  computed: {
    // Calculate the number of full, half, and empty stars
    stars() {
      const fullStars = Math.floor(this.number / 2) // Each full star = 2 points
      const halfStar = this.number % 2 >= 1 ? 1 : 0 // 1 point equals half a star
      const emptyStars = 5 - fullStars - halfStar
      return { fullStars, halfStar, emptyStars }
    },
  },
})
</script>

<template>
  <div class="rating">
    <!-- Full Stars -->
    <font-awesome-icon
      v-for="n in stars.fullStars"
      :key="'full-' + n"
      icon="star"
      class="full-star"
    />

    <!-- Half Star -->
    <font-awesome-icon
      v-if="stars.halfStar"
      icon="star-half-alt"
      class="half-star"
    />

    <!-- Empty Stars -->
    <font-awesome-icon
      v-for="n in stars.emptyStars"
      :key="'empty-' + n"
      icon="star"
      class="empty-star"
    />
  </div>
</template>

<style scoped>
.rating {
  display: flex;
  align-items: center;
  font-size: 20px; /* Adjust size as needed */
}

.full-star {
  color: gold;
}

.half-star {
  color: gold;
}

.empty-star {
  color: rgb(239, 239, 239);
}
</style>
