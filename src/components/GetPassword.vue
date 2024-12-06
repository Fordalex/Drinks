<script lang="ts">
import { defineComponent, ref } from 'vue'
import { usePasswordStore } from '@/stores/passwordStore'

export default defineComponent({
  name: 'PasswordInput',
  setup() {
    const passwordStore = usePasswordStore()
    const password = ref<string>('')

    const storePassword = (): void => {
      if (password.value) {
        passwordStore.setPassword(password.value)
      }
    }

    return {
      password,
      isPasswordSet: passwordStore.isPasswordSet,
      storePassword,
    }
  },
})
</script>

<template>
  <div v-if="!isPasswordSet">
    <form @submit.prevent="storePassword">
      <label for="password">Enter Password:</label>
      <input
        id="password"
        type="password"
        v-model="password"
        required
        placeholder="Enter your password"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
