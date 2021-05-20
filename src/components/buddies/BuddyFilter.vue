<template>
  <div class="filter">
    <h2>Filter</h2>

    <section>
      <h3>Time of the day</h3>
      <div v-for="time in timeLists" :key="time" class="filter-option">
        <input type="checkbox" :id="time" />
        <label :for="time">{{ time }}</label>
      </div>
    </section>

    <section>
      <h3>Level of player</h3>
      <div v-for="level in levelLists" :key="level" class="filter-option">
        <input type="checkbox" :id="level" />
        <label :for="level">{{ level }}</label>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeLists: ['morning', 'evening', 'night'],
      levelLists: ['beginner', 'intermediate', 'advanced'],
      // checked: {
      //   time: [],
      //   level: [],
      // },
    }
  },
  // methods: {
  //   visible(time, level) {
  //     const times = this.checked.time.length
  //       ? _.intersection(time, this.checked.time).length
  //       : true
  //     const level = this.checked.level.length
  //       ? this.checked.level.includes(level)
  //       : true
  //     if (times && level) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   },
  // },
}
// setup() {
//   // const timeLists = ['morning', 'evening', 'night']
//   // const levelLists = ['beginner', 'intermediate', 'advanced']
//   const timeLists = [
//     { id: 'morning', checked: false },
//     { id: 'evening', checked: false },
//     { id: 'night', checked: false },
//   ]
//   const levelLists = [
//     { id: 'beginner', checked: false },
//     { id: 'intermediate', checked: false },
//     { id: 'advanced', checked: false },
//   ]

//   const timeFilter = (event) => {
//     const inputId = event.target.id
//     const isActive = event.target.checked
//     const updatedTimeLists = [
//       ...timeLists,
//       { id: inputId, checked: isActive}
//     ]

//   }

//   return { timeLists, levelLists }
// },
</script>

<style scoped>
.filter {
  padding: 10px;
}
.filter h2 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
}

.filter section {
  padding: 10px;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}
</style>
