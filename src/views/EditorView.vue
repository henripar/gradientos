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
  <InfoSection
    @randomize-gradient="getRandomGradient"
    :colors="colors"
    :darkmode="darkmode"
  />
  <TextOverlaySection :colors="colors" />
  <BackgroundImageSection :colors="colors" />
  <IconsSection :darkmode="darkmode" :colors="colors" />
  <ShareSection :colors="colors" />
</template>

<script>
import EditorSettings from '../components/EditorSettings.vue';
import InfoSection from '../components/InfoSection.vue';
import BackgroundImageSection from '../components/BackgroundImageSection.vue';
import TextOverlaySection from '../components/TextOverlaySection.vue';
import IconsSection from '../components/IconsSection.vue';
import ShareSection from '../components/ShareSection.vue';

export default {
  name: 'editor',
  props: ['gradientColors', 'colorName', 'darkmode', 'gradients'],
  emits: ['dark-mode-switch', 'color1Updated'],
  components: {
    EditorSettings,
    InfoSection,
    BackgroundImageSection,
    TextOverlaySection,
    IconsSection,
    ShareSection,
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
      this.$emit('color1Updated', color, position);
    },
    getRandomGradient() {
      const randomElement =
        this.gradients[Math.floor(Math.random() * this.gradients.length)];
      this.colors = randomElement.colors;
      this.gradientName = randomElement.name;
      this.$emit('color1Updated', this.colors[0], 0);
      this.$emit('color1Updated', this.colors[1], 1);
    },
  },
  created() {
    if (this.gradientColors !== undefined) {
      this.colors = this.gradientColors;
      this.$emit('color1Updated', this.colors[0], 0);
      this.$emit('color1Updated', this.colors[1], 1);
    }
  },
};
</script>

<style scoped>
.section-1 {
  height: 45vh;
}
</style>
