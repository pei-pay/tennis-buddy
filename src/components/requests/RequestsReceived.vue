<template>
  <div>
    <header>
      <h2>Requests Received</h2>
    </header>
    <div v-if="error">{{ error }}</div>
    <p v-if="!hasRequests">
      You haven't received any requests yet!
    </p>
    <ul v-else>
      <li v-for="req in requests" :key="req.id">
        <div>
          <a :href="'mailto:' + req.email">{{ req.email }}</a>
          <p>{{ req.message }}</p>
        </div>
        <font-awesome-icon
          icon="times-circle"
          size="lg"
          @click="handleDelete(req.id)"
          class="delete grow"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import getCollection from '@/composables/getCollection'
import useDocument from '@/composables/useDocument'

export default {
  props: ['userId'],
  setup(props) {
    const { documents: requests, error } = getCollection('requests', [
      'buddyUserId',
      '==',
      props.userId,
    ])

    const { deleteDoc } = useDocument('requests')
    const handleDelete = async (id) => {
      await deleteDoc(id)
    }

    const hasRequests = computed(() => {
      if (requests.value) {
        return requests.value.length
      }
    })
    return { requests, error, hasRequests, handleDelete }
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
}

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}

.delete {
  color: #ff7f7f;
  cursor: pointer;
}
</style>
