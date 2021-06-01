<template>
  <div>
    <div v-for="bud in filteredBuddies" :key="bud.id">
      <router-link :to="{ name: 'BuddyDetails', params: { id: bud.id } }">
        <div class="single">
          <h3>{{ bud.userName }}</h3>
          <p>{{ bud.level }}</p>
          <div>
            <base-badge
              v-for="time in bud.times"
              :key="time"
              :type="time"
              :title="time"
            >
            </base-badge>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import getUser from '@/composables/auth/getUser'
export default {
  props: ['buddies'],
  setup(props) {
    const { user } = getUser()
    const filteredBuddies = computed(() => {
      if (user.value) {
        return props.buddies.filter((bud) => bud.userId !== user.value.uid)
      }
    })

    return { filteredBuddies }
  },
}
</script>

<style scoped>
h3 {
  font-size: 26px;
}

p {
  font-size: 17px;
}

h3,
p {
  margin: 0.5rem 0;
}

.single {
  padding: 20px;
  border-radius: 10px;
  background: white;
  margin: 16px 0;
  transition: all ease 0.2s;
}
.single:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  transform: scale(1.02);
}
</style>
