<script lang="ts">
import { defineComponent, watch } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

export default defineComponent({
  name: 'MapComponent',
  props: {
    pins: {
      type: Array as () => Array<{ lat: number; lng: number }>,
      required: false,
      default: () => [], // Default to an empty array if not provided
    },
  },
  data() {
    return {
      map: null as google.maps.Map | null,    // Google Maps instance
      markers: [] as google.maps.Marker[],   // Keep track of markers
      error: null as string | null,          // Error messages for debugging
    }
  },
  async mounted() {
    console.log('[MapComponent] Mounted lifecycle triggered')

    const mapElement = this.$refs.mapElement as HTMLElement | null
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
      await loader.importLibrary('maps')
      console.log('[MapComponent] Google Maps library loaded successfully')

      this.map = new google.maps.Map(mapElement, {
        center: { lat: 0, lng: 0 },
        zoom: 2,
      })
      console.log('[MapComponent] Google Map initialized:', this.map)

      // Add initial pins
      this.updateMapMarkers(this.pins)
    } catch (error) {
      this.error = 'Failed to initialize Google Maps. Check your API key and configuration.'
      console.error('[MapComponent]', this.error)
    }
  },
  methods: {
    updateMapMarkers(pins: Array<{ lat: number; lng: number }>) {
      if (!this.map) return

      console.log('[MapComponent] Updating map markers')

      // Remove existing markers
      this.markers.forEach(marker => marker.setMap(null))
      this.markers = []

      // Create a LatLngBounds object
      const bounds = new google.maps.LatLngBounds()
      let hasValidPins = false

      // Add new markers and extend bounds
      pins.forEach((pin) => {
        console.log(`[MapComponent] Adding marker at: (${pin.lat}, ${pin.lng})`)
        const marker = new google.maps.Marker({
          position: { lat: pin.lat, lng: pin.lng },
          map: this.map,
        })
        this.markers.push(marker)

        // Extend bounds only if the pin has valid coordinates
        if (pin.lat !== 0 || pin.lng !== 0) {
          bounds.extend(marker.getPosition()!)
          hasValidPins = true
        }
      })

      // Adjust the map viewport if there are valid pins
      if (hasValidPins) {
        console.log('[MapComponent] Fitting bounds to markers')
        this.map.fitBounds(bounds)
      } else {
        console.warn('[MapComponent] No valid pins to fit bounds')
        this.map.setCenter({ lat: 0, lng: 0 }) // Default center
        this.map.setZoom(2)                   // Default zoom
      }
    },
  },
  watch: {
    pins: {
      handler(newPins) {
        console.log('[MapComponent] Pins prop changed:', newPins)
        this.updateMapMarkers(newPins)
      },
      immediate: true, // Trigger the watcher immediately after the component is created
      deep: true,      // If `pins` contains nested objects, deep watching ensures updates
    },
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
      style="width: 100%; height: 500px; background: #f8f8f8"
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
