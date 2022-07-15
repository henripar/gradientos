<template>
  <div
    :style="generateGradient(colors)"
    class="backgroundImageSectionContainer"
  >
    <p class="paragraph">
      Gradientos makes it simple for you to choose a gradient for your next
      project.
    </p>
  </div>
</template>

<script>
export default {
  name: 'BackgrounfImageSeciton',
  props: ['colors'],
  methods: {
    generateGradient(colors) {
      let transparentColors = [...colors];
      transparentColors.forEach((color, index) => {
        transparentColors[index] = this.addAlpha(color, 0.5);
        console.log(color);
      });
      return {
        'background-image': `linear-gradient(${transparentColors[0]}, ${transparentColors[1]}),
    url('https://images.pexels.com/photos/9609298/pexels-photo-9609298.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')`,
      };
    },
    addAlpha(color, opacity) {
      var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
      return color + _opacity.toString(16).toUpperCase();
    },
  },
};
</script>

<style scoped>
.backgroundImageSectionContainer {
  min-height: 100vh;
  display: flex;
  background-position: center;
  background-size: cover;
  margin: 1rem auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0;
}
.paragraph {
  font-size: 2rem;
  color: white;
  width: 55%;
  text-align: center;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.15);
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
}

@media screen and (max-width: 800px) {
  .paragraph {
    width: 80%;
  }
  .container {
    background-position: center;
    background-size: cover;
  }
}
</style>
