<template>
  <div :class="['mainContainer', darkmode ? 'darkBG' : 'lightBG']">
    <DarkModeButton
      class="darkModeBtnContainer"
      :darkmode="darkmode"
      @dark-mode-switch="changeDarkMode"
    />
    <Header
      :darkmode="darkmode"
      text="Hand-picked CSS gradients on UI elements."
      color="black"
    />
    <div class="gradientListContainer">
      <router-link
        :key="gradient.name"
        :style="getBackgroundStyle(gradient.colors)"
        class="gradient-display"
        v-for="gradient in gradients"
        :to="{
          name: 'editor',
          params: { gradientColors: gradient.colors, colorName: gradient.name },
        }"
      >
        <span class="gradientName">{{ gradient.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DarkModeButton from '@/components/DarkModeButton.vue';
import Header from '@/components/Header.vue';

import Gradients from '../data/gradients.json';

export default {
  name: 'HomeView',
  props: ['darkmode', 'gradients'],
  data() {
    return {
      activeColors: [],
    };
  },
  components: {
    DarkModeButton,
    Header,
  },
  methods: {
    getBackgroundStyle(colors) {
      const direction = 'to right';
      return {
        background: `linear-gradient(${direction}, ${colors})`,
      };
    },
    changeDarkMode() {
      this.$emit('dark-mode-switch');
    },
  },
};
</script>

<style scoped>
.mainContainer {
  background: black;
  padding-bottom: 3rem;
}

.gradient-display {
  height: 300px;
  border-radius: 22px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gradientListContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin: 10%;
  margin-top: 2rem;
}

.gradient-display:hover {
  cursor: pointer;
}

.gradient-display:hover > .gradientName {
  display: block;
}

.gradientName {
  display: none;
  font-size: 32px;
  font-weight: 600;
  color: rgb(255, 255, 255);
}

.darkBG {
  background: linear-gradient(to left, #0c121b, #000);
}

.lightBG {
  background: white;
}

.dark {
  color: white !important;
}

.light {
  color: black;
}

.darkModeBtnContainer {
  position: absolute;
  top: 50px;
  right: 10%;
  cursor: pointer;
}

@media screen and (max-width: 1110px) {
  .gradientListContainer {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 799px) {
  .gradientListContainer {
    grid-template-columns: 1fr;
  }
}
</style>
