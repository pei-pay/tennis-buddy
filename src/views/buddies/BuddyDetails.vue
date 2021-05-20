<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="buddy">
      <section class="card">
        <h2>{{ buddy.userName }}</h2>
        <h3>{{ buddy.level }}</h3>
        <base-badge
          v-for="time in buddy.times"
          :key="time"
          :type="time"
          :title="time"
        ></base-badge>
      </section>
      <section class="card">
        <h2>Interested? Reach out now!</h2>
        <base-button @click="isFormShow = true" v-if="!isFormShow">
          Contact
        </base-button>
        <base-button @click="isFormShow = false" v-else mode="alert">
          Close
        </base-button>
        <ContactBuddy v-if="isFormShow" :buddyUserId="buddy.userId" />
      </section>
      <section class="card">
        <p>{{ buddy.intro }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import getDocument from '@/composables/getDocument'
import ContactBuddy from '@/components/requests/ContactBuddy'
import { ref } from '@vue/reactivity'

export default {
  components: { ContactBuddy },
  props: ['id'],
  setup(props) {
    const { error, document: buddy } = getDocument('buddies', props.id)

    const isFormShow = ref(false)

    return { error, buddy, isFormShow }
  },
}
</script>

<style scoped>
.card {
  max-width: 60rem;
}

h2 {
  margin-bottom: 16px;
}
h3 {
  margin-bottom: 16px;
}
</style>
