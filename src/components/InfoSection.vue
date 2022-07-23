<template>
  <div :style="generateBackground()" class="infoSectionContainer">
    <div class="infoSectionContent">
      <h2 :style="generateTextGradient(colors)" class="header2">
        Welcome to Gradientos!
      </h2>
      <p :style="generateTextColor()">
        With Gradientos you can quickly test how different gradients would look
        on some common UI elements.
      </p>
      <button
        @click="getRandomGradient()"
        :style="generateButtonStyles(colors, direction)"
        class="btn"
      >
        Shuffle colors
      </button>
    </div>
  </div>
</template>

<script>
import calculateAngle from '../utils/calculateAngle.js';

export default {
  name: 'InfoSection',
  props: ['colors', 'darkmode', 'direction'],
  methods: {
    generateTextGradient(colors) {
      return {
        background: `-webkit-linear-gradient(
    ${calculateAngle(this.direction)}deg,
    ${colors[0]},
    ${colors[1]}
  )`,
        '-webkit-background-clip': 'text',
      };
    },
    generateButtonStyles(colors, direction) {
      return {
        backgroundImage: `
    -webkit-linear-gradient(${calculateAngle(direction)}deg, ${colors[0]}, ${
          colors[1]
        })
        `,
        color: this.darkmode ? '#fff' : '#000',
        'box-shadow': this.darkmode
          ? '2px 1000px 1px #0c121b inset'
          : '2px 1000px 1px white inset',
      };
    },
    getRandomGradient() {
      this.$emit('randomize-gradient');
    },
    generateBackground() {
      if (this.darkmode === true) {
        return {
          background: '#0c121b',
        };
      } else {
        return {
          background: 'linear-gradient(90deg, #fcfcfc, #ffeabf33)',
        };
      }
    },
    generateTextColor() {
      if (this.darkmode === true) {
        return {
          color: '#fff',
        };
      } else {
        return {
          color: '#000',
        };
      }
    },
  },
};
</script>

<style scoped>
.header2 {
  font-size: 72px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
  margin: 2rem 0;
}
.infoSectionContainer {
  min-height: 50vh;
  display: block;
  padding: 2rem;
  text-align: left;
}

.infoSectionContent {
  width: 65%;
  margin: 0 auto;
}

.btn {
  padding: 1em 2em;
  text-transform: uppercase;
  cursor: pointer;
  margin: 2em 0;
  border-radius: 5px;
  color: black;
  transition: all 0.4s ease-in-out;
  display: block;
  border: 4px solid transparent;
  background-origin: border-box;
  box-shadow: 2px 1000px 1px white inset;
  transform: perspective(1000px) translateZ(0px);
  font-size: 26px;
}

.btn:hover {
  box-shadow: none !important;
  transform: perspective(1000px) translateZ(90px) translateY(0px);
}
p {
  font-size: 2rem;
}

@media screen and (max-width: 640px) {
  .infoSectionContent {
    width: 75%;
  }
  .header2 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.5rem;
  }
}
</style>
