<template>
  <div id="app">
    <div class="ad-display" v-for="(ad, i) in adData" :key="i">
      <div v-html="ad" />
    </div>
  </div>
</template>

<script>
import * as service from "./api/index";

export default {
  name: "app",
  data() {
    return {
      isLoading: false,
      adData: [
        "<p>Loading ad 1</p>",
        "<p>Loading ad 2</p>",
        "<p>Loading ad 3</p>"
      ]
    };
  },
  created() {
    service.getAdData().then(adData => {
      this.isLoading = false;
      this.adData = adData;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ad-display {
  border: 1px black solid;
  float: right;
  min-height: 25vh;
  min-width: 25vw;
  margin: 5px;
}
</style>
