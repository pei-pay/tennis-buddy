<template>
  <div class="navbar">
    <nav>
      <div class="title">
        <h1 class="grow"><router-link to="/">Tennis Buddy</router-link></h1>
        <span v-if="user">Hello, {{ user.displayName }}!</span>
      </div>
      <div class="links">
        <div v-if="user">
          <router-link to="/register" class="hover-bold" v-if="!isBuddy">
            Register as Buddy
          </router-link>
          <router-link
            to="/account"
            v-else
            class="tooltip"
            data-tooltip="Account"
          >
            <font-awesome-icon icon="user-circle" size="lg" class="grow" />
          </router-link>
          <router-link to="/chatroom" class="tooltip" data-tooltip="Chatroom">
            <font-awesome-icon icon="comments" size="lg" class="grow" />
          </router-link>
          <base-button @click="handleLogout" mode="alert">Logout</base-button>
        </div>
        <div v-else>
          <base-button link to="/signup">Signup</base-button>
          <base-button link to="/login">Login</base-button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { computed } from '@vue/runtime-core'
import useLogout from '@/composables/auth/useLogout'
import getUser from '@/composables/auth/getUser'
import getCollection from '@/composables/firestore/getCollection'

export default {
  setup() {
    const router = useRouter()
    const { logout } = useLogout()
    const { user } = getUser()
    const { documents: buddies } = getCollection('buddies')

    const handleLogout = async () => {
      await logout()
      router.replace('/login')
    }

    const isBuddy = computed(() => {
      if (buddies.value) {
        return buddies.value.some((bud) => bud.userId === user.value.uid)
      }
    })

    return { handleLogout, user, isBuddy }
  },
}
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 30px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 26px;
}
nav .title {
  display: flex;
  align-items: center;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 18px;
  font-size: 16px;
}
/* span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  } */
</style>
