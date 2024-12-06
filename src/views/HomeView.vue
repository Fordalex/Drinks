<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useAccessTokenStore } from '@/stores/accessTokenStore'
import { useAuth0 } from '@auth0/auth0-vue';
import Spirit from '../components/Spirit.vue';
import Map from '../components/Map.vue';
import User from '../components/User.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Spirit,
    Map,
    User,
  },
  setup() {
    const spirits = ref<Array<any>>([]);

    const fetchSpirits = async () => {
      try {
        const accessTokenStore = useAccessTokenStore();
        const apiUrl = `${import.meta.env.VITE_API_URL}/spirits`;
        if (!accessTokenStore.accessToken) {
          console.error('No access token available');
          return;
        }
        const response = await fetch(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessTokenStore.accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        spirits.value = await response.json();
      } catch (error) {
        console.error('Error fetching spirits:', error);
      }
    };

    onMounted(() => {
      fetchSpirits();
    });

    return {
      spirits
    };
  },
});
</script>

<template>
  <!-- <br><br><br>
  <br><br><br>
  {{  user  }} -->
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" v-for="(spirit, index) in spirits" :key="index" :spirit="spirit">
        <v-card>
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <div class="image-container">
            <v-img height="250" :src="spirit.image" contain></v-img>
          </div>

          <v-card-item>
            <v-card-title>{{ spirit.name }}</v-card-title>

            <v-card-subtitle>
              <span class="me-1">Local Favorite</span>

              <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
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

            <div>{{ spirit.description || 'No description.' }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple-lighten-2" text="More" block border></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
