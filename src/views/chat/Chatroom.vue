<template>
  <div class="chat-container">
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from '@/components/chat/NewChatForm.vue'
import ChatWindow from '@/components/chat/ChatWindow.vue'
export default {
  components: { NewChatForm, ChatWindow },
}
</script>

<style scoped>
.chat-container {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  border: 1px solid #ebebeb;
}
</style>
