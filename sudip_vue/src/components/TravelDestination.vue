<template>
  <div class="destination">
    <div class="image-box">
      <img :src="destination.image" :alt="destination.destination_name" />
    </div>
    <div class="content">
      <div class="destination-header">
        <h2>{{ destination.destination_name }}</h2>
        <p v-if="destination.pet_friendly" class="green">Pet Friendly</p>
        <p v-else class="red">Not Pet Friendly</p>
      </div>
      <h5>
        Country: {{ destination.country }} (<i>{{ destination.location }}</i
        >)
      </h5>
      <p>{{ destination.description }}</p>
      <ChipCard title="Attractions" :items="destination.attractions" />
      <ChipCard title="Activities" :items="destination.activities" />
    </div>
  </div>
</template>

<script>
import ChipCard from "./ChipCard.vue";

export default {
  components: {
    ChipCard,
  },
  name: "TravelDestination",
  props: {
    destination: Object,
  },
};
</script>

<style scoped>
.destination {
  margin: 20px 0px;
  display: flex;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  align-items: center;
  padding: 20px;
}

.destination-header {
  display: flex;
  justify-content: space-between;
}

.image-box img {
  width: 100%;
  height: 100%;
}

.image-box {
  min-width: 300px;
  width: 300px;

  height: 300px;
  overflow: hidden;
}

.content {
  margin-left: 20px;
}

.content h5 {
  margin-bottom: 12px;
}

.destination-header p {
  color: white;
  padding: 8px;
}

.red {
  background-color: orangered !important;
}

.green {
  background-color: green;
}

@media screen and (max-width: 1100px) {
  .destination {
    flex-direction: column;
    padding: 10px;
  }
  .destination-header {
    padding: 20px 0px;
    flex-wrap: wrap;
  }

  .image-box {
    min-width: 100%;
    height: 400px;
    overflow: hidden;
  }
}

@media screen and (max-width: 768px) {
  .image-box {
    height: 300px;
  }
}
</style>