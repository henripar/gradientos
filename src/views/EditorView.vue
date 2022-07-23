<template>
  <div class="editorContainer">
    <a
      href="https://github.com/henripar/gradientos"
      class="github-corner"
      aria-label="View source on GitHub"
      ><svg
        width="80"
        height="80"
        viewBox="0 0 250 250"
        style="
          fill: #151513;
          color: #fff;
          position: absolute;
          top: 0;
          border: 0;
          right: 0;
        "
        aria-hidden="true"
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style="transform-origin: 130px 106px"
          class="octo-arm"
        ></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        ></path></svg
    ></a>

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
    :direction="direction"
    :isSearchOpen="isSearchOpen"
    @color-1-updated="updateColor"
    @dark-mode-switch="changeDarkMode"
    @direction-change="changeDirection"
    @open-search="openSearch"
  />
  <InfoSection
    @randomize-gradient="getRandomGradient"
    :colors="colors"
    :darkmode="darkmode"
    :direction="direction"
  />
  <TextOverlaySection :colors="colors" :direction="direction" />
  <BackgroundImageSection :colors="colors" :direction="direction" />
  <IconsSection :colors="colors" :darkmode="darkmode" :direction="direction" />
  <TypographySection
    :colors="colors"
    :darkmode="darkmode"
    :direction="direction"
  />
  <ShareSection :colors="colors" :direction="direction" />
  <!-- <IconsSection :darkmode="darkmode" :colors="colors" />  -->
  <Search
    @update-colors="changeGradient"
    @close-search="isSearchOpen = !isSearchOpen"
    v-if="isSearchOpen"
    :colors="colors"
    :darkmode="darkmode"
  />
</template>

<script>
import EditorSettings from '../components/EditorSettings.vue';
import InfoSection from '../components/InfoSection.vue';
import BackgroundImageSection from '../components/BackgroundImageSection.vue';
import TextOverlaySection from '../components/TextOverlaySection.vue';
import IconsSection from '../components/IconsSection.vue';
import ShareSection from '../components/ShareSection.vue';
import Search from '../components/Search.vue';
import TypographySection from '../components/TypographySection.vue';

export default {
  name: 'editor',
  props: ['gradientColors', 'colorName', 'darkmode', 'gradients'],
  emits: [
    'dark-mode-switch',
    'color1Updated',
    'directionChange',
    'open-search',
  ],
  components: {
    EditorSettings,
    InfoSection,
    BackgroundImageSection,
    TextOverlaySection,
    IconsSection,
    ShareSection,
    Search,
    TypographySection,
  },

  data() {
    return {
      colors: ['#d770b2', '#e4ad7a'],
      direction: 90,
      gradientName: undefined,
      isSearchOpen: false,
    };
  },
  methods: {
    generateGradient(colors) {
      return {
        background: `linear-gradient(${this.direction}deg, ${colors})`,
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
    changeDirection(direction) {
      this.direction = direction;
    },
    getRandomGradient() {
      const randomElement =
        this.gradients[Math.floor(Math.random() * this.gradients.length)];
      this.colors = randomElement.colors;
      this.gradientName = randomElement.name;
      this.$emit('color1Updated', this.colors[0], 0);
      this.$emit('color1Updated', this.colors[1], 1);
    },
    changeGradient(gradient) {
      this.colors = gradient.colors;
      this.gradientName = gradient.name;
      this.isSearchOpen = false;
      this.$emit('color1Updated', gradient.colors[0], 0);
      this.$emit('color1Updated', gradient.colors[1], 1);
    },
    openSearch() {
      this.isSearchOpen = true;
    },
    keyUpEvent(e) {
      if (e.keyCode === 32 && e.ctrlKey) {
        e.preventDefault();
        this.isSearchOpen = !this.isSearchOpen;

        this.closeModals = true;
      } else if (e.keyCode === 32 && this.isSearchOpen == false) {
        e.preventDefault();
        this.getRandomGradient();
      }
    },
    keyPressEvent(e) {
      if (e.keyCode === 32 && this.isSearchOpen === false) {
        e.preventDefault();
      }
    },
    keydownEvent(e) {
      if (e.keyCode === 32 && this.isSearchOpen === false) {
        e.preventDefault();
      }
    },
  },
  created() {
    if (this.gradientColors !== undefined) {
      this.colors = this.gradientColors;
      this.$emit('color1Updated', this.colors[0], 0);
      this.$emit('color1Updated', this.colors[1], 1);
      window.addEventListener('keyup', this.keyUpEvent);
      window.addEventListener('keypress', this.keyPressEvent);
      window.addEventListener('keydown', this.keydownEvent);
    }
  },
  destroyed() {
    window.removeEventListener('keyup', this.keyUpEvent);
    window.removeEventListener('keypress', this.keyPressEvent);
    window.removeEventListener('keydown', this.keydownEvent);
  },
};
</script>

<style scoped>
.section-1 {
  height: 45vh;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

@media (max-width: 850px) {
  .github-corner {
    display: none;
  }
}
</style>
