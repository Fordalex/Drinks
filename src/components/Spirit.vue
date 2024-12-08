<script lang="ts">
import { defineComponent, ref } from 'vue';
import EditRecord from './EditRecord.vue'; // Import the EditModal component

interface Spirit {
  name: string;
  description: string;
  image: string;
}

export default defineComponent({
  name: 'Spirit',
  props: {
    spirit: {
      type: Object as () => Spirit,
      required: true,
    },
  },
  components: {
    EditRecord,
  },
  setup(props) {
    const editedSpirit = ref({ ...props.spirit }); // Local copy for editing

    const saveChanges = () => {
      console.log('Updated Spirit:', editedSpirit.value);
      // Replace this with an API call or state update logic
    };

    return {
      editedSpirit,
      saveChanges,
    };
  },
});
</script>

<template>
  <v-card>

    <v-col cols="12">
          <v-menu
            location="bottom start"
            origin="overlap"
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                density="comfortable"
                icon="mdi-dots-vertical"
                variant="tonal"
              ></v-btn>
            </template>

            <v-list :lines="false">
              <v-list-item
                title="Edit"
                @click="$refs.editRecord.dialog = true"
              ></v-list-item>
            </v-list>
          </v-menu>
        </v-col>

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
      <!-- Edit Button -->
      <EditRecord ref="editRecord" @save="saveChanges">
        <template #title>
          <span>Edit Spirit</span>
        </template>
        <template #form>
          <v-form>
            <v-text-field
              v-model="editedSpirit.name"
              label="Name"
              required
            ></v-text-field>
            <v-textarea
              v-model="editedSpirit.description"
              label="Description"
              rows="4"
              required
            ></v-textarea>
          </v-form>
        </template>
      </EditRecord>
    </v-card-actions>
  </v-card>
</template>
