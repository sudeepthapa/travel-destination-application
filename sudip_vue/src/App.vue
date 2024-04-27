<template>
  <div id="main-container">
    <MyHeader
      title="Travel Destinations"
      subtitle="Embark on a Global Adventure"
    />
    <h6 v-if="loading">Loading... Please wait for a moment.</h6>
    <h6 v-if="errorMessage">{{ errorMessage }}</h6>
    <TravelDestinationBox :destinations="destinations" />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import TravelDestinationBox from "./components/TravelDestinationBox.vue";

export default {
  name: "App",

  components: {
    MyHeader,
    TravelDestinationBox,
  },
  data() {
    return {
      destinations: [],
      loading: false,
      errorMessage: "",
    };
  },
  methods: {
    async fetchTravelDestinations() {
      try {
        this.loading = true;
        const res = await fetch("https://sudipthapa.onrender.com/api");
        const data = await res.json();
        this.loading = false;
        return data;
      } catch (error) {
        this.loading = false;
        this.errorMessage = "Something went wrong. Please reload the page.";
      }
    },
  },
  async created() {
    this.destinations = await this.fetchTravelDestinations();
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

#main-container {
  padding: 0px 40px;
  max-width: 1800px;
  margin: auto;
}

#main-container h6 {
  font-size: 16px;
  text-align: center;
  margin-top: 50px;
}

@media screen and (max-width: 768px) {
  #main-container {
    padding: 0px 20px;
  }
}
</style>
