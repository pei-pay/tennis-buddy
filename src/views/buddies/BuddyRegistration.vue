<template>
  <form @submit.prevent="handleSubmit" class="card">
    <h2>Register as Buddy</h2>
    <div>
      <h3>Introduce yourself</h3>
      <textarea
        required
        placeholder="Introduction"
        v-model="introduction"
      ></textarea>
    </div>

    <div class="form-control">
      <h3>Your level</h3>
      <div>
        <input
          type="radio"
          id="beginner"
          value="beginner"
          name="level"
          checked
          v-model="level"
        />
        <label for="beginner">Beginner</label>
      </div>
      <div>
        <input
          type="radio"
          id="intermediate"
          value="intermediate"
          name="level"
          v-model="level"
        />
        <label for="intermediate">Intermediate</label>
      </div>
      <div>
        <input
          type="radio"
          id="advanced"
          value="advanced"
          name="level"
          v-model="level"
        />
        <label for="advanced">Advanced</label>
      </div>
    </div>

    <div class="form-control">
      <h3>Availability</h3>
      <div>
        <input type="checkbox" id="morning" value="morning" v-model="times" />
        <label for="morning">Morning</label>
      </div>
      <div>
        <input type="checkbox" id="evening" value="evening" v-model="times" />
        <label for="evening">Evening</label>
      </div>
      <div>
        <input type="checkbox" id="night" value="night" v-model="times" />
        <label for="night">Night</label>
      </div>
    </div>

    <div v-if="error" class="error">{{ error }}</div>
    <base-button v-if="!isPending">Register</base-button>
    <base-button v-else disabled>Saving...</base-button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'

export default {
  setup() {
    const introduction = ref('')
    const level = ref('beginner')
    const times = ref([])

    const { error, addDoc, isPending } = useCollection('buddies')
    const { user } = getUser()
    const router = useRouter()

    const handleSubmit = async () => {
      const res = await addDoc({
        userId: user.value.uid,
        userName: user.value.displayName,
        intro: introduction.value,
        level: level.value,
        times: times.value,
        createdAt: timestamp(),
      })
      if (!error.value) {
        router.push({ name: 'BuddyDetails', params: { id: res.id } })
      }
    }

    return { introduction, level, times, handleSubmit, error, isPending }
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}

h3 {
  margin: 8px 0;
  font-size: 1rem;
}
.form-control {
  margin: 1rem 0;
}
</style>
