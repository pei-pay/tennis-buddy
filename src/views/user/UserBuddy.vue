<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="buddies">
      <div class="edit">
        <router-link
          :to="{ name: 'UserEdit', params: { id: buddies[0].id } }"
          class="hover-bold"
        >
          Edit Profile
        </router-link>
      </div>
      <section class="card">
        <h2>{{ buddies[0].userName }}</h2>
        <h3>{{ buddies[0].level }}</h3>
        <base-badge
          v-for="time in buddies[0].times"
          :key="time"
          :type="time"
          :title="time"
        ></base-badge>
      </section>
      <section class="card">
        <p>{{ buddies[0].intro }}</p>
      </section>
    </div>
    <div>
      <section class="card">
        <RequestsReceived :userId="userId" />
      </section>
    </div>
  </div>
</template>

<script>
import getUser from '@/composables/auth/getUser'
import getCollection from '@/composables/firestore/getCollection'
import RequestsReceived from '@/components/requests/RequestsReceived'

export default {
  components: { RequestsReceived },
  setup() {
    const { user } = getUser()
    const userId = user.value.uid
    const { documents: buddies, error } = getCollection('buddies', [
      'userId',
      '==',
      userId,
    ])
    return { buddies, error, userId }
  },
}
</script>

<style scoped>
.card {
  max-width: 60rem;
}
.edit {
  max-width: 60rem;
  margin: 0 auto;
}

h2 {
  margin-bottom: 16px;
}
h3 {
  margin-bottom: 16px;
}
</style>
