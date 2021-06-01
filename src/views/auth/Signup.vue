<template>
  <form @submit.prevent="handleSubmit" class="card">
    <h3>Sign up</h3>
    <input
      type="text"
      required
      placeholder="displayName"
      v-model="displayName"
    />
    <input type="email" required placeholder="Email" v-model="email" />
    <input
      type="password"
      required
      placeholder="Password"
      v-model="password"
      autocomplete="on"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <base-button v-if="!isPending">Sign up</base-button>
    <base-button v-else disabled>Loading</base-button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '@/composables/auth/useSignup'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const { error, signup, isPending } = useSignup()
    const router = useRouter()

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        router.push('/')
      }
    }

    return { displayName, email, password, handleSubmit, error, isPending }
  },
}
</script>
