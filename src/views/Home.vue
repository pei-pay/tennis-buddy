<template>
  <div class="home">
    <div v-if="error" class="error">{{ error }}</div>
    <div class="layout" v-if="levelFilteredBuddies">
      <div v-if="!levelFilteredBuddies.length == 0">
        <transition-group name="list">
          <BuddyItem
            v-for="bud in levelFilteredBuddies"
            :key="bud.id"
            :id="bud.id"
            :name="bud.userName"
            :level="bud.level"
            :times="bud.times"
          />
        </transition-group>
      </div>
      <div v-else>
        No Buddies Found
      </div>
      <BuddyFilter
        @change-time-filter="setTimeFilters"
        @change-level-filter="setLevelFilters"
      />
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/firestore/getCollection'
import getUser from '@/composables/auth/getUser'

import BuddyItem from '@/components/buddies/BuddyItem.vue'
import BuddyFilter from '@/components/buddies/BuddyFilter.vue'
import { computed, ref } from '@vue/runtime-core'

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

    //time filter

    // const activeTimeFilters = reactive({
    //   morning: false,
    //   evening: false,
    //   night: false,
    // })
    // computedは基本ネストしたObjectの値までは検知しない為、プリミティブを使用
    const morning = ref(false)
    const evening = ref(false)
    const night = ref(false)

    const setTimeFilters = (updatedTimeFilters) => {
      morning.value = updatedTimeFilters.morning
      evening.value = updatedTimeFilters.evening
      night.value = updatedTimeFilters.night
    }

    const timeFilteredBuddies = computed(() => {
      if (!morning.value && !evening.value && !night.value) {
        return filteredBuddies.value
      }
      return filteredBuddies.value.filter((bud) => {
        if (morning.value && bud.times.includes('morning')) {
          return true
        }
        if (evening.value && bud.times.includes('evening')) {
          return true
        }
        if (night.value && bud.times.includes('night')) {
          return true
        }
        return false
      })
    })

    //level Filter
    const beginner = ref(false)
    const intermediate = ref(false)
    const advanced = ref(false)

    const setLevelFilters = (updatedLevelChecked) => {
      beginner.value = updatedLevelChecked.beginner
      intermediate.value = updatedLevelChecked.intermediate
      advanced.value = updatedLevelChecked.advanced
    }

    const levelFilteredBuddies = computed(() => {
      if (!beginner.value && !intermediate.value && !advanced.value) {
        return timeFilteredBuddies.value
      }
      return timeFilteredBuddies.value.filter((bud) => {
        if (beginner.value && bud.level == 'beginner') {
          return true
        }
        if (intermediate.value && bud.level == 'intermediate') {
          return true
        }
        if (advanced.value && bud.level == 'advanced') {
          return true
        }
        return false
      })
    })

    return {
      error,
      setTimeFilters,
      setLevelFilters,
      levelFilteredBuddies,
    }
  },
}
</script>

<style>
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 100px;
}

.list-move {
  transition: transform 0.8s ease;
}
.list-enter-from {
  opacity: 0;
}
.list-leave-to {
  opacity: 0;
}

.list-enter-active {
  transition: all 0.5s ease-out;
}
.list-leave-active {
  transition: all 0.5s ease-in;
  position: absolute;
}

.list-enter-to,
.list-leave-from {
  opacity: 1;
}
</style>
