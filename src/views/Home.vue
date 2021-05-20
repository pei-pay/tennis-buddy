<template>
  <div class="home">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="buddies" class="layout">
      <div>
        <BuddyItem
          v-for="bud in buddies"
          :key="bud.id"
          :id="bud.id"
          :name="bud.userName"
          :level="bud.level"
          :times="bud.times"
        />
      </div>
      <BuddyFilter />
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
// import getUser from '@/composables/getUser'

import BuddyItem from '@/components/buddies/BuddyItem.vue'
import BuddyFilter from '@/components/buddies/BuddyFilter.vue'

export default {
  name: 'Home',
  components: { BuddyItem, BuddyFilter },
  setup() {
    const { documents: buddies, error } = getCollection('buddies')
    // const { user } = getUser()
    // const { documents: buddies, error } = getCollection('buddies', [
    //   'userId',
    //   '!=',
    //   user.value.uid,
    // ])

    return { error, buddies }
  },
}
</script>

<style>
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 100px;
}
</style>
