<template>
  <div>
    <router-link :to="{ name: 'BuddyDetails', params: { id: id } }">
      <div class="single">
        <h3>{{ name }}</h3>
        <p>{{ level }}</p>
        <div>
          <base-badge
            v-for="time in times"
            :key="time"
            :type="time"
            :title="time"
          >
          </base-badge>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'level', 'times'],
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
