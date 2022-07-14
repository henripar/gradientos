<template>
  <div class="editorContainer">
    <div :style="generateGradient(colors)" class="section-1">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editor',
  props: ['colors'],
  methods: {
    generateGradient(colors) {
      const direction = 'to left';
      return {
        background: `linear-gradient(${direction}, ${colors})`,
      };
    },
  },
};
</script>

<style scoped>
.section-1 {
  height: 40vh;
}
</style>
