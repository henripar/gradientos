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
  components: {
    Chrome,
  },
  methods: {
    updateValue() {
      console.log(this.color);
      this.$emit('color-1-updated', this.color.hex);
    },
  },
  watch: {
    color: {
      handler() {
        console.log(this.color.hex);
        this.$emit(
          'color-1-updated',
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
  top: 60px;
}
.vc-chrome-alpha-wrap {
  display: none !important;
}
.vc-checkerboard {
  display: none;
}
.vc-chrome-fields-wrap {
  display: none;
}
.vc-chrome-active-color {
  width: 10px;
  height: 10px;
}
</style>
