<template>
  <div class="filter">
    <h2>Filter</h2>

    <section>
      <h3>Time of the day</h3>
      <div v-for="time in timeLists" :key="time" class="filter-option">
        <input type="checkbox" :id="time" @change="setTimeFilter" />
        <label :for="time">{{ time }}</label>
      </div>
    </section>

    <section>
      <h3>Level of player</h3>
      <div v-for="level in levelLists" :key="level" class="filter-option">
        <input type="checkbox" :id="level" @change="setLevelFilter" />
        <label :for="level">{{ level }}</label>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup(_, context) {
    const timeLists = ['morning', 'evening', 'night']
    const levelLists = ['beginner', 'intermediate', 'advanced']

    let timeChecked = {
      morning: false,
      evening: false,
      night: false,
    }
    const setTimeFilter = (event) => {
      const inputId = event.target.id
      const isActive = event.target.checked
      let updatedTimeChecked = {
        ...timeChecked,
        [inputId]: isActive,
      }
      // console.log(updatedTimeChecked)
      timeChecked = updatedTimeChecked
      context.emit('change-time-filter', updatedTimeChecked)
    }

    let levelChecked = {
      morning: false,
      evening: false,
      night: false,
    }

    const setLevelFilter = (event) => {
      const inputId = event.target.id
      const isActive = event.target.checked
      let updatedLevelChecked = {
        ...levelChecked,
        [inputId]: isActive,
      }
      // console.log(updatedTimeChecked)
      levelChecked = updatedLevelChecked
      context.emit('change-level-filter', updatedLevelChecked)
    }

    return { timeLists, levelLists, setTimeFilter, setLevelFilter }
  },
}
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
