<template>
  <div :class="[darkmode ? 'darkBG' : 'lightBG', 'editorContainer']">
    <div class="container" :style="createCSSVariables()">
      <h2 :class="darkmode ? 'dark' : 'light'">Icons</h2>
      <p :class="darkmode ? 'darkP' : 'light'">
        Wonder if this gradient works on icons?
      </p>
      <p :class="darkmode ? 'darkP' : 'light'">
        Well, see for yourself. We have selected some examples for you.
      </p>
      <div class="iconsContainer">
        <div class="row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <defs>
              <linearGradient
                id="currentGradient"
                gradientUnits="userSpaceOnUse"
                :gradientTransform="`rotate(${direction - 90}, 12, 12)`"
              >
                >
                <stop offset="1%" :stop-color="colors[0]" />
                <stop offset="99%" :stop-color="colors[1]" />
              </linearGradient>
            </defs>
            <path
              d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
              class="svgGradient"
            ></path>
            <path d="M2 12a9 9 0 0 1 8 8" class="svgGradient"></path>
            <path d="M2 16a5 5 0 0 1 4 4" class="svgGradient"></path>
            <line x1="2" y1="20" x2="2.01" y2="20" class="svgGradient"></line>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="svgGradient"
          >
            <defs>
              <linearGradient
                id="currentGradient"
                gradientUnits="userSpaceOnUse"
                :gradientTransform="`rotate(${direction - 90}, 12, 12)`"
              >
                >
                <stop offset="1%" :stop-color="colors[0]" />
                <stop offset="99%" :stop-color="colors[1]" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="2" class="svgGradient"></circle>
            <path
              d="M4.93 19.07a10 10 0 0 1 0-14.14"
              class="svgGradient"
            ></path>
            <path
              d="M7.76 16.24a6 6 0 0 1-1.3-1.95 6 6 0 0 1 0-4.59 6 6 0 0 1 1.3-1.95"
              class="svgGradient"
            ></path>
            <path
              d="M16.24 7.76a6 6 0 0 1 1.3 2 6 6 0 0 1 0 4.59 6 6 0 0 1-1.3 1.95"
              class="svgGradient"
            ></path>
            <path
              d="M19.07 4.93a10 10 0 0 1 0 14.14"
              class="svgGradient"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <defs>
              <linearGradient
                id="currentGradient"
                gradientUnits="userSpaceOnUse"
                :gradientTransform="`rotate(${direction - 90}, 12, 12)`"
              >
                >
                <stop offset="1%" :stop-color="colors[0]" />
                <stop offset="99%" :stop-color="colors[1]" />
              </linearGradient>
            </defs>
            <path
              d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"
              class="svgGradient"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <defs>
              <linearGradient
                id="currentGradient"
                gradientUnits="userSpaceOnUse"
                :gradientTransform="`rotate(${direction - 90}, 12, 12)`"
              >
                >
                <stop offset="1%" :stop-color="colors[0]" />
                <stop offset="99%" :stop-color="colors[1]" />
              </linearGradient>
            </defs>
            <path
              class="svgGradient"
              d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"
            ></path>
            <path class="svgGradient" d="M13.73 21a2 2 0 01-3.46 0"></path>
          </svg>
        </div>
        <div class="row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <defs>
              <linearGradient
                id="currentGradient"
                gradientUnits="userSpaceOnUse"
                :gradientTransform="`rotate(${direction - 90}, 12, 12)`"
              >
                >
                <stop offset="1%" :stop-color="colors[0]" />
                <stop offset="99%" :stop-color="colors[1]" />
              </linearGradient>
            </defs>
            <path d="m7 7 10 10-5 5V2l5 5L7 17" class="svgGradient"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <defs>
              <linearGradient
                id="currentGradient"
                gradientUnits="userSpaceOnUse"
                :gradientTransform="`rotate(${direction - 90}, 12, 12)`"
              >
                >
                <stop offset="1%" :stop-color="colors[0]" />
                <stop offset="99%" :stop-color="colors[1]" />
              </linearGradient>
            </defs>
            <path
              d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
              class="svgGradient"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <defs>
              <linearGradient
                id="currentGradient"
                gradientUnits="userSpaceOnUse"
                :gradientTransform="`rotate(${direction - 90}, 12, 12)`"
              >
                >
                <stop offset="1%" :stop-color="colors[0]" />
                <stop offset="99%" :stop-color="colors[1]" />
              </linearGradient>
            </defs>
            <path
              class="svgGradient"
              d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042l-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893l-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042l.348-1.97M7.48 20.364l3.126-17.727"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <defs>
              <linearGradient
                id="currentGradient"
                gradientUnits="userSpaceOnUse"
                :gradientTransform="`rotate(${direction - 90}, 12, 12)`"
              >
                >
                <stop offset="1%" :stop-color="colors[0]" />
                <stop offset="99%" :stop-color="colors[1]" />
              </linearGradient>
            </defs>
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              class="svgGradient"
            ></polygon>
          </svg>
        </div>
      </div>
      <span :class="[darkmode ? 'darkP' : 'light', 'spanFont']"
        >Icons by
        <a
          href="https://lucide.dev/"
          :style="{
            fontWeight: 500,
            color: darkmode ? 'white' : 'black',
          }"
          >Lucide</a
        >.</span
      >
    </div>
  </div>
</template>

<script>
import calculateAngle from '../utils/calculateAngle.js';
export default {
  name: 'TestSection',
  props: ['colors', 'darkmode', 'direction'],
  data() {
    return {
      calculateAngle: calculateAngle,
    };
  },
  methods: {
    createCSSVariables() {
      return {
        '--gradient-color-1': this.colors[0],
        '--gradient-color-2': this.colors[1],
      };
    },
  },
};
</script>

<style scoped>
.editorContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh;
}

.container {
  text-align: left;
  width: 65%;
  display: block;
  margin: 0 auto;
}

.darkBG {
  background: #0c121b;
}

.lightBG {
  background: linear-gradient(90deg, #fcfcfc, #ffeabf33);
}

.dark {
  color: white;
}

.darkP {
  color: #ffffffb5;
}

.light {
  color: black;
}

.iconsContainer {
  margin: 1rem;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 4rem 0;
}

.svgGradient {
  stroke: url(#currentGradient);
}

.svgFillColor1 {
  stroke: var(--gradient-color-1);
  z-index: 1000;
}

.svgFillColor2 {
  stroke: var(--gradient-color-2);
  z-index: 1000;
}

h2 {
  font-size: 72px;
  font-weight: 800;
  margin: 0.5rem 0;
  margin-bottom: 1rem;
}

h3 {
  font-size: 60px;
}

h4 {
  font-size: 48px;
}

p {
  font-size: 32px;
  font-weight: 300;
}

.spanFont {
  font-weight: 300;
  font-size: 22px;
}

.gradientText {
  background: linear-gradient(
    to right,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.label {
  color: white;
  font-size: 24px;
  font-weight: 200;
  font-style: italic;
}

@media screen and (max-width: 1000px) {
  svg {
    margin: 0 1rem;
  }
}

@media screen and (max-width: 925px) {
  .container {
    width: 80%;
  }
}

@media screen and (max-width: 770px) {
  p {
    font-size: 24px;
  }
  .row {
    margin: 1rem 0;
  }
  .editorContainer {
    min-height: auto !important;
  }
}

@media screen and (max-width: 700px) {
  .row {
    display: inline-flex;
    flex-direction: column;
    width: fit-content;
  }
  .iconsContainer {
    text-align: center;
  }
  svg {
    margin: 1rem;
  }
}

@media screen and (max-width: 570px) {
  h2 {
    font-size: 48px;
  }
}

@media screen and (max-width: 530px) {
  svg {
    width: 90px;
    height: 90px;
  }
  .container {
    width: 90%;
  }
}

@media screen and (max-width: 390px) {
  svg {
    width: 55px;
    height: 55px;
  }
  p {
    font-size: 18px;
  }

  .spanFont {
    font-size: 18px;
  }
}
</style>
