<template>
  <div class="picker">
    <svg
      v-for="angle in directions"
      v-bind:key="angle"
      @click="changeDirection(angle)"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      :class="['button', direction == angle ? 'activeButton' : null]"
    >
      <g :transform="`rotate(${angle - 90}, 0, 0)`" transform-origin="center">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </g>
    </svg>
    <span class="empty-grid-element"></span>
  </div>
</template>

<script>
export default {
  props: ['darkmode', 'direction'],
  emits: ['directionChange'],
  data() {
    return {
      directions: [315, 0, 45, 270, 90, 225, 180, 135],
    };
  },
  methods: {
    changeDirection(angle) {
      this.$emit('directionChange', angle);
    },
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
  padding: 0.35rem;
  border-radius: 7px;
}

.dark .activeButton {
  background: #ececec16;
  cursor: pointer;
}

.light .activeButton {
  background: rgba(227, 227, 227, 0.425);
  cursor: pointer;
}

.dark .button:hover {
  background: #ececec16;
}

.light .button:hover {
  background: rgba(227, 227, 227, 0.425);
}

.picker {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.35rem;
  border-radius: 12px;
}

.empty-grid-element {
  grid-column: 2;
  grid-row: 2;
}
</style>
