<template>
    <span class="gradient-direction-picker">
        <svg
            @click="togglePicker"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="darkmode ? 'dark' : 'light'"
            >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
        <div v-if="pickerVisible" class="picker" :class="darkmode ? 'darkContainer' : 'lightContainer'">
            <svg
                v-for="angle in directions" @click="changeDirection(angle)"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                :class="darkmode ? 'dark' : 'light'"
                >
                <g :transform="`rotate(${angle - 90}, 0, 0)`" transform-origin="center">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </g>
            </svg>
            <span class="empty-grid-element"></span>
        </div>
    </span>
</template>

<script>
export default {
    name: 'GradientDirectionPicker',
    props: ['darkmode', 'direction'],
    emits: ['directionChange'],
    data() {
        return {
            directions: [-45, 0, 45, -90, 90, -135, 180, 135],
            pickerVisible: false,
        }
    },
    methods: {
        togglePicker() {
            this.pickerVisible = !this.pickerVisible;
        },
        changeDirection(angle) {
            this.togglePicker();
            this.$emit('directionChange', angle);
        },
    }
}
</script>

<style>
.darkContainer {
  backdrop-filter: blur(12px);
  background: #00000091;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark {
    color: white;
}

.light {
    color: black;
}

.dark:hover,
.selected.dark {
  background: #ececec16;
  cursor: pointer;
}

.light:hover,
.selected.light {
  background: rgba(227, 227, 227, 0.425);
  cursor: pointer;
}

.lightContainer {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.gradient-direction-picker {
    position: relative;
}

.picker {
    position: absolute;
    top: 200%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 12px;
}

.empty-grid-element {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
}
</style>