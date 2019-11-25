<template>
  <div id="app">
    <div v-if="!isLoading">
      <div class="ad-display" v-if="adData[0] != null">
        <div>{{ adData[0].fields.title }}</div>
      </div>
      <div class="ad-display" v-if="adData[1] != null">
        <div>{{ adData[1].fields.title }}</div>
      </div>
      <div class="ad-display" v-if="adData[2] != null">
        <div>{{ adData[2].fields.title }}</div>
      </div>
      <div class="ad-display" v-if="adData[3] != null">
        <div>{{ adData[3].fields.title }}</div>
      </div>
      <div class="ad-display" v-if="adData[4] != null">
        <div>{{ adData[4].fields.title }}</div>
      </div>
      <div class="ad-display" v-if="adData[5] != null">
        <div>{{ adData[5].fields.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isLoading: false,
      adData: [null, null, null, null, null, null]
    };
  },
  created() {
    this.isLoading = true;
    fetch("http://dev.hellopgh.com:8000/neighborhood/brighton_heights/").then(
      res => {
        res.json().then(data => {
          this.isLoading = false;
          this.adData[0] = data.advertisements[0];
          this.adData[1] = data.advertisements[0];
          this.adData[2] = data.advertisements[0];
        });
      }
    );
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
