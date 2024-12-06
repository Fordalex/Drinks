import { defineStore } from 'pinia'

export const usePasswordStore = defineStore('password', {
  state: () => ({
    password: localStorage.getItem('password') || null,
  }),
  getters: {
    isPasswordSet(state): boolean {
      return !!state.password
    },
  },
  actions: {
    setPassword(password: string): void {
      this.password = password
      localStorage.setItem('password', password)
    },
  },
})
