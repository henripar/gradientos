<template>
  <router-view
    :darkmode="darkmode"
    :gradients="gradients"
    @dark-mode-switch="changeDarkMode"
    @color1Updated="updateColor"
  />
  <Footer :darkmode="darkmode" :colors="colors" />
</template>

<script>
import Gradients from './data/gradients.json';
import Footer from './components/Footer.vue';

export default {
  data() {
    return {
      gradients: Gradients,
      darkmode: true,
      colors: ['#e5b178', '#d670b4'],
    };
  },
  components: { Footer },
  emits: ['color1Updated'],
  methods: {
    changeDarkMode() {
      this.darkmode = !this.darkmode;
    },
    updateColor(color, position) {
      this.colors[position] = color;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
*::selection {
  background: #e4ad7a;
  color: #fff;
  -webkit-text-fill-color: #fff;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  text-decoration: none;
}

canvas {
  display: none;
}
</style>
