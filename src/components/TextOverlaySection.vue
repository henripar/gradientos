<template>
  <div class="container">
    <div class="backgroundBlur">
      <h1 :style="generateGradient(colors)" class="header1">
        Gradient on grayscale.
      </h1>
    </div>
    <div class="info">
      <h2 class="infoHeader">Did you know?</h2>
      <p class="infoText">
        You can shuffle
        <span
          :style="{
            background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          }"
          >colors</span
        >
        by gently pressing space on your keyboard.
      </p>
    </div>
  </div>
</template>

<script>
import calculateAngle from '../utils/calculateAngle.js';
export default {
  name: 'TextOverlaySection',
  props: ['colors', 'direction'],
  methods: {
    generateGradient(colors) {
      return {
        background: `-webkit-linear-gradient(
    ${calculateAngle(this.direction)}deg,
    ${colors[0]},
    ${colors[1]}
  )`,
      };
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1524230476179-d13bcb5e3ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
  display: flex;
  background-position: center;
  background-size: cover;
  margin: 1rem auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  position: relative;
}

.backgroundBlur {
  backdrop-filter: blur(4px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.header1 {
  font-size: 92px;
  background-clip: text;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
}

.info {
  position: absolute;
  right: 50px;
  bottom: 60px;
  text-align: left;
}

.infoHeader {
  color: rgba(255, 255, 255, 0.813);
  text-transform: uppercase;
  font-weight: 500;
}

.infoText {
  background: linear-gradient(to right, #ffffff9b, #ffffffc0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 1030px) {
  .header1 {
    width: min-content;
    box-sizing: border-box;
    text-align: center;
  }
}

@media screen and (max-width: 800px) {
  .header1 {
    font-size: 3rem;
    text-align: left;
  }
}

@media screen and (max-width: 800px) {
  .info {
    position: relative;
    right: inherit;
    margin: 1rem;
  }
}
</style>
