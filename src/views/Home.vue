<template>
  <div class="home">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="buddies" class="layout">
      <div>
        <BuddyItem
          v-for="bud in timeFilteredBuddies"
          :key="bud.id"
          :id="bud.id"
          :name="bud.userName"
          :level="bud.level"
          :times="bud.times"
        />
      </div>
      <BuddyFilter @change-time-filter="setTimeFilters" />
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import getUser from '@/composables/getUser'

import BuddyItem from '@/components/buddies/BuddyItem.vue'
import BuddyFilter from '@/components/buddies/BuddyFilter.vue'
import { computed, reactive, watch } from '@vue/runtime-core'

export default {
  name: 'Home',
  components: { BuddyItem, BuddyFilter },
  setup() {
    const { user } = getUser()
    const { documents: buddies, error } = getCollection('buddies')

    const filteredBuddies = computed(() => {
      if (!user.value) {
        return buddies.value
      } else if (buddies.value) {
        return buddies.value.filter((bud) => bud.userId !== user.value.uid)
      }
    })

    const activeTimeFilters = reactive({
      morning: false,
      evening: false,
      night: false,
    })

    const setTimeFilters = (updatedTimeFilters) => {
      activeTimeFilters.value = updatedTimeFilters
      console.log(activeTimeFilters.value)
    }

    const timeFilteredBuddies = computed(() => {
      return filteredBuddies.value.filter((bud) => {
        if (activeTimeFilters.morning && !bud.times.includes('morning')) {
          return false
        }
        if (activeTimeFilters.evening && !bud.times.includes('evening')) {
          return false
        }
        if (activeTimeFilters.night && !bud.times.includes('night')) {
          return false
        }
        return true
      })
    })

    // watch(activeTimeFilters, () => {
    //   //ここにtimeFilteredBuddiesの代わりとなるものをfunctionでかく必要あり
    // })

    return { error, buddies, timeFilteredBuddies, setTimeFilters }
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
