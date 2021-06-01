<template>
  <div class="chat-window">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="formattedMessages" class="messages" ref="window">
      <div v-for="mes in formattedMessages" :key="mes.id" class="single">
        <span class="created-at">{{ mes.createdAt }}</span>
        <span class="name">{{ mes.userName }}</span>
        <span class="message">{{ mes.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/firestore/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from '@vue/runtime-core'

export default {
  setup() {
    const { documents: messages, error } = getCollection('messages')

    const formattedMessages = computed(() => {
      if (messages.value) {
        return messages.value.map((mes) => {
          let time = formatDistanceToNow(mes.createdAt.toDate())
          return { ...mes, createdAt: time }
        })
      }
    })

    //auto-scorll to bottom of messages
    const window = ref(null)
    onUpdated(() => {
      window.value.scrollTop = window.value.scrollHeight
    })

    return { formattedMessages, error, window }
  },
}
</script>

<style>
.chat-window {
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
