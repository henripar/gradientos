<template>
  <div :class="['mainContainer', darkmode ? 'darkBG' : 'lightBG']">
    <div class="darkModeBtnContainer">
      <a href="https://www.github.com/henripar/gradientos">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          :style="darkmode ? { color: '#fff' } : { color: '#000' }"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          ></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      </a>
      <DarkModeButton
        :darkmode="darkmode"
        @dark-mode-switch="changeDarkMode"
        :isClickable="true"
      />
    </div>
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
  padding-bottom: 1rem;
}

.gradient-display {
  height: 300px;
  border-radius: 22px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}

.gradientListContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin: 2rem 10%;
  margin-top: 2rem;
}

.gradient-display:hover {
  cursor: pointer;
}

.gradient-display:hover > .gradientName {
  opacity: 1;
  transform: scale(1);
}

.gradientName {
  opacity: 0;
  transform: scale(0.6);
  font-size: 32px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  transition: all 0.3s 0s ease-in-out;
}

.darkBG {
  background: linear-gradient(to left, #0c121b, #000);
}

.lightBG {
  background: linear-gradient(90deg, #fcfcfc, #ffeabf33);
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
  display: flex;
  align-items: baseline;
  width: 80px;
  justify-content: space-between;
}
.darkModeBtnContainer > .light,
.dark {
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
