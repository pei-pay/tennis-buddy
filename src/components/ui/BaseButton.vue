<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
}
</script>

<style scoped>
button,
a {
  background: #ebebeb;
  border-radius: 8px;
  border: 0;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease-in-out;
}

a:hover,
a:active,
button:hover,
button:active {
  background: #4f515a;
  color: white;
}

button:disabled {
  opacity: 0.5;
  color: #4f515a;
  background: #ebebeb;
  cursor: not-allowed;
}

.alert {
  color: #ff7f7f;
  background: white;
  border: 1px solid #ff7f7f;
}
.alert:hover {
  background: #ff7f7f;
  color: white;
}
</style>
