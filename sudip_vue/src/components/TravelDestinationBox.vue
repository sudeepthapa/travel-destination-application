<template>
  <main v-for="destination of destinations" :key="destination.id">
    <TravelDestination :destination="destination" />
  </main>
</template>
<script>
import TravelDestination from "./TravelDestination.vue";

export default {
  name: "TravelDestinationBox",
  components: {
    TravelDestination,
  },
  props: {
    destinations: Array,
  },
};
</script>
<style scoped>
</style>
