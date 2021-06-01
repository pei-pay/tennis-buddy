<template>
  <form @submit.prevent="handleSubmit" class="card">
    <h3>Login</h3>
    <input type="email" required placeholder="Email" v-model="email" />
    <input
      type="password"
      required
      placeholder="Password"
      v-model="password"
      autocomplete="on"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <base-button v-if="!isPending">Login</base-button>
    <base-button v-else disabled>Loading</base-button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useLogin from '@/composables/auth/useLogin'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const { error, login, isPending } = useLogin()
    const router = useRouter()

    const handleSubmit = async () => {
      const res = await login(email.value, password.value)
      if (!error.value) {
        router.push('/')
      }
    }

    return { email, password, handleSubmit, error, isPending }
  },
}
</script>
