<script lang="ts">
import { defineComponent } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

export default defineComponent({
  name: 'MapComponent',
  props: {
    pins: {
      type: Array as () => Array<{ lat: number; lng: number }>,
      required: true,
    },
  },
  data() {
    return {
      map: null as google.maps.Map | null,    // Google Maps instance
      error: null as string | null,          // Error messages for debugging
    }
  },
  async mounted() {
    console.log('[MapComponent] Mounted lifecycle triggered')

    // Access the ref using this.$refs
    const mapElement = this.$refs.mapElement as HTMLElement | null
    console.log('[MapComponent] mapElement:', mapElement)

    if (!mapElement) {
      this.error = 'Map container (mapElement) is null. Ensure the template is rendered correctly.'
      console.error('[MapComponent]', this.error)
      return
    }

    const loader = new Loader({
      apiKey: 'AIzaSyCwsi3cP6XFyaEj7aQRkhE3eLSWFM_tS2Q', // Replace with your actual API key
      version: 'weekly',
    })

    try {
      console.log('[MapComponent] Loading Google Maps library...')

      // Load the Google Maps library
      await loader.importLibrary('maps')
      console.log('[MapComponent] Google Maps library loaded successfully')

      // Initialize the map
      this.map = new google.maps.Map(mapElement, {
        center: { lat: 0, lng: 0 }, // Temporary center, adjusted later
        zoom: 2,                    // Temporary zoom, adjusted later
      })
      console.log('[MapComponent] Google Map initialized:', this.map)

      // Create a LatLngBounds object to include all pins
      const bounds = new google.maps.LatLngBounds()

      // Add markers for each pin in the props and extend bounds
      this.pins.forEach((pin) => {
        console.log(`[MapComponent] Adding marker at: (${pin.lat}, ${pin.lng})`)
        const marker = new google.maps.Marker({
          position: { lat: pin.lat, lng: pin.lng },
          map: this.map,
        })
        bounds.extend(marker.getPosition()!)
      })

      // Adjust the map's viewport to fit all markers
      this.map.fitBounds(bounds)
      console.log('[MapComponent] Map viewport adjusted to fit all pins')
    } catch (error) {
      console.error('[MapComponent]', this.error)
    }
  },
})
</script>

<template>
  <div>
    <!-- Display error message if initialization fails -->
    <p v-if="error" class="error-message">{{ error }}</p>

    <!-- Map container -->
    <div
      ref="mapElement"
      style="width: 100%; height: 500px; background: #f8f8f8;"
      title="Google Maps Container"
    ></div>
  </div>
</template>

<style scoped>
/* Optional styles for the map component */
.error-message {
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
