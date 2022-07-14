<template>
  <router-view
    :darkmode="darkmode"
    :gradients="gradients"
    @dark-mode-switch="changeDarkMode"
  />
</template>

<script>
import Gradients from './data/gradients.json';

export default {
  data() {
    return {
      gradients: Gradients,
      darkmode: true,
    };
  },
  methods: {
    changeDarkMode() {
      this.darkmode = !this.darkmode;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
