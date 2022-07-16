<template>
  <div class="editorContainer">
    <div
      :style="generateGradient(colors)"
      id="printable"
      class="section-1"
    ></div>
  </div>
  <EditorSettings
    :colors="colors"
    :gradientName="gradientName ?? colorName ?? 'Custom'"
    :darkmode="darkmode"
    @color-1-updated="updateColor"
    @dark-mode-switch="changeDarkMode"
  />
  <InfoSection :colors="colors" :darkmode="darkmode" />
  <TextOverlaySection :colors="colors" />
  <BackgroundImageSection :colors="colors" />
  <IconsSection :darkmode="darkmode" :colors="colors" />
</template>

<script>
import EditorSettings from '../components/EditorSettings.vue';
import InfoSection from '../components/InfoSection.vue';
import BackgroundImageSection from '../components/BackgroundImageSection.vue';
import TextOverlaySection from '../components/TextOverlaySection.vue';
import IconsSection from '../components/IconsSection.vue';

export default {
  name: 'editor',
  props: ['gradientColors', 'colorName', 'darkmode', 'gradients'],
  emits: ['dark-mode-switch'],
  components: {
    EditorSettings,
    InfoSection,
    BackgroundImageSection,
    TextOverlaySection,
    IconsSection,
  },

  data() {
    return {
      colors: ['#d770b2', '#e4ad7a'],
      gradientName: undefined,
    };
  },
  methods: {
    generateGradient(colors) {
      const direction = 'to right';
      return {
        background: `linear-gradient(${direction}, ${colors})`,
      };
    },
    changeDarkMode() {
      this.$emit('dark-mode-switch');
    },
    updateColor(color, position) {
      // this.colors[0] = color;
      var test = [...this.colors];
      test[position] = color;
      this.colors = test.slice();
      this.gradientName = 'Custom';
      // this.gradientColors = test;
    },
  },
  created() {
    if (this.gradientColors !== undefined) {
      this.colors = this.gradientColors;
    }
  },
};
</script>

<style scoped>
.section-1 {
  height: 40vh;
}
</style>
