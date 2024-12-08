<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'EditRecord',
  setup(_, { emit }) {
    const dialog = ref(false); // Controls the visibility of the modal

    const saveRecord = () => {
      emit('save'); // Emit a save event to the parent
      dialog.value = false; // Close the modal after saving
    };

    return {
      dialog,
      saveRecord,
    };
  },
});
</script>

<template>
  <div>
    <!-- Edit Button -->
    <v-btn color="primary" @click="dialog = true">Edit</v-btn>

    <!-- Modal Dialog -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>
          <slot name="title">Edit Record</slot>
        </v-card-title>
        <v-card-text>
          <slot name="form">No form provided</slot>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="secondary" @click="dialog = false">Cancel</v-btn>
          <v-btn text color="primary" @click="saveRecord">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
/* Add custom styling here if needed */
</style>
