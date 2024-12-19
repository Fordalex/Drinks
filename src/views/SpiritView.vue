<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAccessTokenStore } from '@/stores/accessTokenStore'
import Spirit from '../components/Spirit.vue'

export default defineComponent({
  name: 'SpiritView',
  components: {
    Spirit,
  },
  setup() {
    const spirit = ref({} as any)

    const fetchSpirit = async () => {
      const route = useRoute()
      const id = route.params.id
      const accessTokenStore = useAccessTokenStore()
      const apiUrl = `${import.meta.env.VITE_API_URL}/distilleries/${id}`
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessTokenStore.accessToken}`,
        },
      })
      spirit.value = await response.json()
    }
    fetchSpirit()
    return {
      spirit,
    }
  }
})
</script>

<template>
  <Spirit :spirit="spirit" />
</template>
