<template>
  <div :style="generateBackground()" class="infoSectionContainer">
    <h2 :style="generateTextGradient(colors)" class="header2">
      Welcome to gradientos!
    </h2>
    <p :style="generateTextColor()">
      With Gradientos you can quickly test how different gradients would look on
      some common UI elements.
    </p>
    <button :style="generateButtonStyles(colors)" class="btn">
      Shuffle colors
    </button>
  </div>
</template>

<script>
export default {
  name: 'InfoSection',
  props: ['colors', 'darkmode'],
  methods: {
    generateTextGradient(colors) {
      return {
        background: `-webkit-linear-gradient(
    40deg,
    ${colors[0]},
    ${colors[1]}
  )`,
        '-webkit-background-clip': 'text',
      };
    },
    generateButtonStyles(colors) {
      return {
        backgroundImage: `
    -webkit-linear-gradient(101deg, ${colors[0]}, ${colors[1]})
        `,
        color: this.darkmode ? '#fff' : '#000',
        'box-shadow': this.darkmode
          ? '2px 1000px 1px #0c121b inset'
          : '2px 1000px 1px white inset',
      };
    },
    generateBackground() {
      if (this.darkmode === true) {
        return {
          background: '#0c121b',
        };
      } else {
        return {
          background: '#fff',
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
</style>
