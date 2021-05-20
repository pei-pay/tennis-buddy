<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="email">Your E-Mail</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
    </div>
    <p class="error" v-if="!formIsValid">
      Please enter a valid message and non-empty message.
    </p>
    <div>
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { timestamp } from '@/firebase/config'
import useCollection from '@/composables/useCollection'
export default {
  props: ['buddyUserId'],
  setup(props) {
    const router = useRouter()
    const { addDoc, error } = useCollection('requests')

    const email = ref('')
    const message = ref('')
    const formIsValid = ref(true)

    const handleSubmit = async () => {
      //validation
      formIsValid.value = true
      if (
        email.value === '' ||
        !email.value.includes('@') ||
        message.value === ''
      ) {
        formIsValid.value = false
        return
      }

      //add document
      const request = {
        email: email.value,
        message: message.value,
        buddyUserId: props.buddyUserId,
        createdAt: timestamp(),
      }
      await addDoc(request)
      if (!error.value) {
        router.replace('/')
      }
    }

    return { email, message, formIsValid, handleSubmit }
  },
}
</script>
