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
    :background="background"
    :gradientName="colorName"
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
  props: ['gradientColors', 'colorName', 'darkmode'],
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
  },
  beforeMount() {
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
