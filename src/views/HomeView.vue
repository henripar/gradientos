<template>
  <div :class="['mainContainer', darkmode ? 'darkBG' : 'lightBG']">
    <DarkModeButton :darkmode="darkmode" @dark-mode-switch="changeDarkMode" />
    <Header
      :darkmode="darkmode"
      text="Hand-picked CSS gradients on live UI elements."
      color="black"
    />
    <div class="gradientListContainer">
      <div
        :key="gradient.name"
        :style="getBackgroundStyle(gradient.colors)"
        class="gradient-display"
        v-for="gradient in gradients"
      >
        <span class="gradientName">{{ gradient.name }}</span>
      </div>
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
  components: {
    DarkModeButton,
    Header,
  },
  methods: {
    getBackgroundStyle(colors) {
      const direction = 'to left';
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

<style>
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
  color: white;
}

.light {
  color: black;
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
