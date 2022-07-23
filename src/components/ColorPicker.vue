<template>
  <div class="colorPickerContainer">
    <Chrome v-model="color" @update="updateValue"></Chrome>
  </div>
</template>

<script>
import { Chrome } from '@ckpack/vue-color';
console.log(Chrome);

export default {
  name: 'ColorPicker',
  props: ['color', 'position'],
  emits: ['color1Updated'],
  components: {
    Chrome,
  },
  methods: {
    updateValue() {
      console.log(this.color);
      this.$emit('color1Updated', this.color.hex);
    },
  },
  watch: {
    color: {
      handler() {
        console.log(this.color.hex);
        this.$emit(
          'color1Updated',
          this.color?.hex?.toLowerCase() ?? this.color.toLowerCase(),
          this.position
        );
      },
      immediate: true,
    },
  },
};
</script>

<style>
.colorPickerContainer {
  position: absolute;
  top: 80px;
}
.vc-chrome-alpha-wrap {
  display: none !important;
}
.vc-checkerboard {
  display: none;
}

.vc-chrome-controls {
  display: flex !important;
  align-items: center !important;
}

.vc-chrome-fields-wrap {
  display: none;
}
</style>
