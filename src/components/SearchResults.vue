<template>
  <div
    v-if="listGradients.length > 0"
    :class="['resultsContainer', darkmode ? 'dark' : 'light']"
  >
    <ul v-if="listGradients.length > 0">
      <li
        @click="changeGradient(gradient)"
        :key="gradient.id"
        v-for="gradient in listGradients"
      >
        <span class="gradientInfo">
          <span
            class="gradientPreview"
            :style="{
              background: `linear-gradient(45deg, ${gradient.colors[0]}, ${gradient.colors[1]})`,
            }"
          ></span>
          {{ gradient.name }}
        </span>
        <span class="gradientSource">
          {{ gradient.source ? gradient.source : null }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import gradientsJson from '../data/gradients.json';
import uiGradientsJson from '../data/uigradients.json';
import webGradientsJson from '../data/webGradients.json';

export default {
  name: 'SearchResults',
  props: ['text', 'darkmode'],
  data() {
    return {
      gradients: gradientsJson,
      uiGradients: uiGradientsJson,
      webGradients: webGradientsJson,
      listGradients: [],
    };
  },
  methods: {
    changeGradient(e) {
      this.$emit('update-colors', e);
    },
  },
  created() {
    this.uiGradients = this.uiGradients.filter((uiGradient) => {
      return uiGradient.colors.length === 2;
    });

    this.uiGradients.forEach((gradient, index) => {
      let expandedGradient = { ...gradient, source: 'uiGradients' };
      this.uiGradients[index] = expandedGradient;
    });

    this.gradients = this.gradients.concat(this.uiGradients);

    this.webGradients = this.webGradients.filter((webGradient) => {
      return webGradient.gradient.length === 2;
    });

    this.webGradients.forEach((gradient, index) => {
      let newGradientModel = {
        name: gradient.name,
        colors: [gradient.gradient[0].color, gradient.gradient[1].color],
        source: 'WebGradients',
      };
      this.webGradients[index] = newGradientModel;
    });

    this.gradients = this.gradients.concat(this.webGradients);

    this.gradients = this.gradients.sort((i, j) => {
      if (i.name < j.name) {
        return -1;
      }
      if (i.name > j.name) {
        return 1;
      } else {
        return 0;
      }
    });
    this.gradients.forEach((gradient, index) => {
      let expandedGradient = { ...gradient, id: crypto.randomUUID() };
      this.gradients[index] = expandedGradient;
    });
  },
  watch: {
    text: {
      immediate: true,
      handler() {
        this.listGradients = this.gradients.filter((i) => {
          if (this.text !== '') {
            return i.name.toLowerCase().includes(this.text.toLowerCase());
          }
        });
      },
    },
  },
};
</script>

<style>
.resultsContainer {
  max-height: 200px;
  overflow-y: auto;
  margin-right: 0.4rem;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}

/* width */
.resultsContainer::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.resultsContainer::-webkit-scrollbar-track {
  background: transparent;
  margin-top: 0.2rem;
}

/* Handle */
.resultsContainer.dark::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.157);
  border-radius: 10px;
}

.resultsContainer.light::-webkit-scrollbar-thumb {
  background: rgba(14, 14, 14, 0.224);
  border-radius: 10px;
}

.resultsContainer.dark {
  border-top: 1px solid rgba(255, 255, 255, 0.175);
}

.resultsContainer.light {
  border-top: 1px solid rgba(0, 0, 0, 0.099);
}

.resultsContainer.dark li {
  color: white;
}

.resultsContainer.light li {
  color: black;
}

.resultsContainer.dark.gradientSource {
  color: rgba(255, 255, 255, 0.308);
}

.resultsContainer.dark > ul > li > .gradientSource {
  color: rgba(255, 255, 255, 0.308);
}

.resultsContainer.light > ul > li > .gradientSource {
  color: rgba(0, 0, 0, 0.308);
}

.resultsContainer.dark > ul > li:hover {
  background: rgba(255, 255, 255, 0.08);
}

.resultsContainer.light > ul > li:hover {
  background: rgba(227, 227, 227, 0.425);
}

/* Handle on hover */
.resultsContainer::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.gradientInfo {
  align-content: center;
  display: flex;
  align-items: center;
}

li {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  opacity: 1;
  animation: 0.3s ease-in-out 0s 1 slideInFromLeft;
  margin-right: 0.3rem;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
}

@keyframes slideInFromLeft {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

ul {
  padding: 0;
  margin-top: 0.5rem;
}

.gradientPreview {
  height: 20px;
  width: 20px;
  display: inline-block;
  border-radius: 7px;
  margin-right: 1rem;
}
</style>
