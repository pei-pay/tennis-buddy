<template>
  <div>
    <div v-if="loadError" class="error">{{ loadError }}</div>
    <form v-if="document" @submit.prevent="handleSubmit" class="card">
      <h2>Edit Profile</h2>
      <div>
        <h3>Name</h3>
        <input type="text" required v-model="document.userName" />
      </div>
      <div>
        <h3>Introduction</h3>
        <textarea required v-model="document.intro"></textarea>
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
            v-model="document.level"
          />
          <label for="beginner">Beginner</label>
        </div>
        <div>
          <input
            type="radio"
            id="intermediate"
            value="intermediate"
            name="level"
            v-model="document.level"
          />
          <label for="intermediate">Intermediate</label>
        </div>
        <div>
          <input
            type="radio"
            id="advanced"
            value="advanced"
            name="level"
            v-model="document.level"
          />
          <label for="advanced">Advanced</label>
        </div>
      </div>

      <div class="form-control">
        <h3>Availability</h3>
        <div>
          <input
            type="checkbox"
            id="morning"
            value="morning"
            v-model="document.times"
          />
          <label for="morning">Morning</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="evening"
            value="evening"
            v-model="document.times"
          />
          <label for="evening">Evening</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="night"
            value="night"
            v-model="document.times"
          />
          <label for="night">Night</label>
        </div>
      </div>
      <div v-if="updateError" class="error">{{ updateError }}</div>
      <div v-if="!isPending">
        <base-button style="margin-right: 1rem">Save</base-button>
        <base-button type="button" @click="handleCancel" mode="alert"
          >Cancel</base-button
        >
      </div>
      <base-button v-else disabled>Saving...</base-button>
    </form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import getDocument from '@/composables/getDocument'
import useDocument from '@/composables/useDocument'

export default {
  props: ['id'],
  setup(props) {
    const router = useRouter()
    const { document, error: loadError } = getDocument('buddies', props.id)
    const { updateDoc, error: updateError, isPending } = useDocument('buddies')

    const handleSubmit = async () => {
      await updateDoc(props.id, {
        userName: document.value.userName,
        intro: document.value.intro,
        level: document.value.level,
        times: document.value.times,
      })
      if (!updateError.value) {
        router.push({ name: 'UserBuddy' })
      }
    }

    const handleCancel = () => {
      router.push({ name: 'UserBuddy' })
    }
    return {
      document,
      loadError,
      updateError,
      isPending,
      handleSubmit,
      handleCancel,
    }
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
