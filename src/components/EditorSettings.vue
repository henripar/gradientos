<template>
  <div class="container">
    <router-link
      :style="{
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'text-decoration': 'none',
        color: '#000',
      }"
      to="/"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    </router-link>
    <span :style="{ background: colors[0] }" class="colorBox"></span>
    <span @click="copyToClipboard(colors[0], 0)" class="colorText">
      {{ isColor1Copied ? 'Copied!' : colors[0] }}
    </span>
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
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
    <span :style="{ background: colors[1] }" class="colorBox"></span>
    <span @click="copyToClipboard(colors[1], 1)" class="colorText">
      {{ isColor2Copied ? 'Copied!' : colors[1] }}
    </span>
    <span class="gradientName">{{ gradientName }}</span>
    <button class="settingButton">
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
    <button class="settingButton" @click="downloadGradient()">
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
    <button class="settingButton">
      <DarkModeButton
        :style="{ position: 'relative' }"
        @dark-mode-switch="changeDarkMode"
        :darkmode="darkmode"
      />
    </button>
  </div>
</template>

<script>
import DarkModeButton from './DarkModeButton.vue';
import html2canvas from 'html2canvas';
export default {
  name: 'EditorSettings',
  props: ['colors', 'darkmode', 'gradientName'],
  components: { DarkModeButton },
  data() {
    return {
      isColor1Copied: false,
      isColor2Copied: false,
    };
  },
  methods: {
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
  position: absolute;
  top: 50px;
  left: 50%;
  width: fit-content;
  background: white;
  border-radius: 12px;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.colorBox {
  height: 20px;
  width: 20px;
  display: inline-flex;
  border-radius: 7px;
  margin-left: 1rem;
}

.colorText {
  padding: 0.35rem 0.5rem;
  margin: 0 1rem;
  border-radius: 7px;
  width: 97px;
}

.gradientName {
  color: black;
  display: inline-block;
  margin-right: 1rem;
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
.settingButton:hover {
  background: rgba(227, 227, 227, 0.528);
  cursor: pointer;
}

.colorText:hover {
  background: rgba(227, 227, 227, 0.528);
  cursor: pointer;
}
</style>
