<template>
  <div class="mainContainer">
    <div :class="['container', darkmode ? 'darkContainer' : 'lightContainer']">
      <router-link
        :style="{
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'text-decoration': 'none',
          color: darkmode ? '#fff' : '#000',
        }"
        to="/"
        aria-label="To home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </router-link>
      <span
        @click="openColorPicker(1)"
        :style="{ background: colors[0] }"
        class="colorBox"
      >
      </span>
      <ColorPicker
        @color1Updated="updateColor"
        v-if="isColor1PickerOpen"
        :position="0"
        :color="colors[0]"
      />
      <span
        @click="copyToClipboard(colors[0], 0)"
        :class="['colorText', darkmode ? 'dark' : 'light']"
      >
        {{ isColor1Copied ? 'Copied!' : colors[0] }}
      </span>
      <button
        @click="openDirectionPicker"
        :class="[
          'settingButton',
          darkmode ? 'dark' : 'light',
          isDirectionPickerOpen ? 'activeButton' : null,
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <g
            :transform="`rotate(${direction - 90}, 0, 0)`"
            transform-origin="center"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </g>
        </svg>
      </button>
      <span
        :style="{ background: colors[1] }"
        class="colorBox"
        @click="openColorPicker(2)"
      >
      </span>
      <ColorPicker
        @color-1-updated="updateColor"
        v-if="isColor2PickerOpen"
        :position="1"
        :color="colors[1]"
      />
      <span
        @click="copyToClipboard(colors[1], 1)"
        :class="['colorText', darkmode ? 'dark' : 'light']"
      >
        {{ isColor2Copied ? 'Copied!' : colors[1] }}
      </span>
      <span
        @click.prevent="openSearch"
        :class="['gradientName', darkmode ? 'dark' : 'light']"
      >
        <span class="gradientNameText">{{ gradientName }} </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg
      ></span>
      <button
        @click="openCSSCopyModal()"
        :class="[
          'settingButton',
          darkmode ? 'dark' : 'light',
          isCopyCSSModalOpen ? 'activeButton' : null,
        ]"
        aria-label="Copy gradient CSS"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </button>
      <button
        :class="['settingButton', darkmode ? 'dark' : 'light']"
        @click="downloadGradient()"
        aria-label="Download Gradient as image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </button>
      <button
        :class="['settingButton', darkmode ? 'dark' : 'light']"
        aria-label="Switch dark mode"
        @click="changeDarkMode()"
      >
        <DarkModeButton
          :style="{ position: 'relative' }"
          :isClickable="false"
          :darkmode="darkmode"
        />
      </button>
    </div>
    <DirectionPicker
      v-if="isDirectionPickerOpen"
      :class="[
        'directionPickerContainer',
        darkmode ? 'darkContainer' : 'lightContainer',
        darkmode ? 'dark' : 'light',
      ]"
      :direction="direction"
      @direction-change="changeDirection"
    />
    <CopyCSSModal
      :darkmode="darkmode"
      :colors="colors"
      :direction="direction"
      v-if="isCopyCSSModalOpen"
    />
  </div>
</template>

<script>
import DarkModeButton from './DarkModeButton.vue';
import ColorPicker from './ColorPicker.vue';
import html2canvas from 'html2canvas';
import CopyCSSModal from './CopyCSSModal.vue';
import DirectionPicker from './DirectionPicker.vue';
export default {
  name: 'EditorSettings',
  props: ['colors', 'darkmode', 'gradientName', 'direction', 'isSearchOpen'],
  emits: [
    'color1Updated',
    'darkModeSwitch',
    'dark-mode-switch',
    'directionChange',
    'open-search',
  ],
  components: { DarkModeButton, ColorPicker, CopyCSSModal, DirectionPicker },
  data() {
    return {
      isColor1Copied: false,
      isColor2Copied: false,
      isColor1PickerOpen: false,
      isColor2PickerOpen: false,
      isCopyCSSModalOpen: false,
      isDirectionPickerOpen: false,
    };
  },
  watch: {
    isSearchOpen: {
      handler() {
        this.closeModals();
      },
      immediate: true,
    },
  },
  methods: {
    closeModals() {
      this.isCopyCSSModalOpen = false;
      this.isColor1PickerOpen = false;
      this.isColor2PickerOpen = false;
      this.isDirectionPickerOpen = false;
    },
    openCSSCopyModal() {
      this.isCopyCSSModalOpen = !this.isCopyCSSModalOpen;
      this.isColor1PickerOpen = false;
      this.isColor2PickerOpen = false;
      this.isDirectionPickerOpen = false;
    },
    openColorPicker(position) {
      if (position === 1) {
        this.isColor1PickerOpen = !this.isColor1PickerOpen;
        this.isColor2PickerOpen = false;
        this.isCopyCSSModalOpen = false;
      }
      if (position === 2) {
        this.isColor2PickerOpen = !this.isColor2PickerOpen;
        this.isColor1PickerOpen = false;
        this.isCopyCSSModalOpen = false;
      }
      this.isDirectionPickerOpen = false;
    },
    openDirectionPicker() {
      this.isDirectionPickerOpen = !this.isDirectionPickerOpen;
      this.isColor2PickerOpen = false;
      this.isColor1PickerOpen = false;
      this.isCopyCSSModalOpen = false;
    },
    openSearch() {
      this.closeModals();
      this.$emit('open-search');
    },
    updateColor(color, position) {
      this.$emit('color1Updated', color, position);
    },
    changeDirection(direction) {
      this.$emit('directionChange', direction);
    },
    changeDarkMode() {
      this.$emit('dark-mode-switch');
    },
    copyToClipboard(color, position) {
      if (position === 0) {
        this.isColor1Copied = true;
        setTimeout(() => {
          this.isColor1Copied = false;
        }, 1000);
      } else if (position == 1) {
        this.isColor2Copied = true;
        setTimeout(() => {
          this.isColor2Copied = false;
        }, 1000);
      }
      navigator.clipboard.writeText(color);
    },
    downloadGradient() {
      html2canvas(document.querySelector('#printable')).then((canvas) => {
        document.body.appendChild(canvas);
        //var img = canvas.toDataURL('image/png');
        var img = new Image();
        img.src = canvas.toDataURL('image/png');

        var a = document.createElement('a');
        a.href = img.src;
        a.download = 'gradientos.png';

        a.click();
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
}

.darkContainer {
  backdrop-filter: blur(12px);
  background: #00000091;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.lightContainer {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.dark {
  color: white;
}

.light {
  color: black;
}

.colorBox {
  height: 20px;
  width: 20px;
  display: inline-flex;
  border-radius: 7px;
  margin-left: 1rem;
  position: relative;
}

.colorBox:hover {
  cursor: pointer;
}

.colorText {
  padding: 0.35rem 0.5rem;
  margin: 0 0.5rem;
  border-radius: 7px;
  width: 97px;
}

.gradientName {
  display: inline-block;
  margin-right: 1rem;
  position: relative;
  cursor: pointer;
}

.gradientName > svg {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in;
}

.gradientNameText {
  opacity: 1;
  transition: all 0.3s ease-in-out;
}

.gradientName:hover > .gradientNameText {
  opacity: 0;
}

.gradientName:hover > svg {
  opacity: 1;
}

.settingButton {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 1rem;
  border: none;
  border-radius: 7px;
  background: transparent;
}
.settingButton.light:hover {
  background: rgba(227, 227, 227, 0.425);
  cursor: pointer;
}

.activeButton.dark {
  background: #ececec16;
  cursor: pointer;
}

.activeButton.light {
  background: rgba(227, 227, 227, 0.425);
  cursor: pointer;
}

.colorText.light:hover {
  background: rgba(227, 227, 227, 0.425);
  cursor: pointer;
}

.colorText.dark:hover {
  background: #ececec16;
  cursor: pointer;
}
.settingButton.dark:hover {
  background: #ececec16;
  cursor: pointer;
}

button {
  outline: none;
}

.mainContainer {
  position: fixed;
  top: 60px;
  left: 50%;
  width: fit-content;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.directionPickerContainer {
  position: absolute;
  top: 80px;
  left: 0;
}

@media screen and (max-width: 680px) {
  .container {
    justify-content: space-around;
    width: 90%;
  }
  .colorText {
    display: none;
  }
  .gradientName {
    display: none;
  }
  .colorBox {
    margin: 0;
  }
}

@media screen and (max-width: 450px) {
  .container {
    flex-direction: row;
    top: 7%;
    left: 50%;
    justify-content: space-around;
    align-items: center;
    height: auto;
    width: 90%;
  }
}
</style>
