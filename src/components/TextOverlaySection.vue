<template>
  <div class="container">
    <div class="backgroundBlur">
      <h1 :style="generateGradient(colors)" class="header1">
        Gradient on grayscale.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextOverlaySection',
  props: ['colors'],
  methods: {
    generateGradient(colors) {
      return {
        background: `-webkit-linear-gradient(
    40deg,
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
  }
}
</style>
