<template>
  <div class="wrapper">
    <div
      ref="search"
      class="searchContainer"
      :style="
        darkmode
          ? {
              background: '#00000091',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }
          : { background: '#fff', border: '1px solid rgba(0, 0, 0, 0.2)' }
      "
    >
      <input
        ref="input"
        :class="darkmode ? 'dark' : 'light'"
        v-model="searchValue"
        placeholder=" Search for gradients"
      />
      <SearchResults
        @update-colors="updateColors"
        :darkmode="darkmode"
        :text="searchValue"
      />
    </div>
  </div>
</template>

<script>
import SearchResults from './SearchResults.vue';
export default {
  name: 'Search',
  components: { SearchResults },
  props: ['darkmode'],
  data() {
    return {
      searchValue: '',
    };
  },
  mounted() {
    this.$refs.input.focus();
    setTimeout(() => {
      window.addEventListener('click', this.test);
    }, 100);
  },
  unmounted() {
    window.removeEventListener('click', this.test);
  },
  methods: {
    updateColors(gradient) {
      this.$emit('update-colors', gradient);
    },
    test(event) {
      event.preventDefault();
      var searchElement = this.$refs.search;
      var isClickInsideSearchElement = searchElement?.contains(event.target);

      if (!isClickInsideSearchElement) {
        // Close modal when click is outside search element
        this.$emit('close-search');
      }
    },
  },
};
</script>

<style scoped>
.searchContainer {
  backdrop-filter: blur(12px);
  border-radius: 12px;
  width: 420px;
  box-shadow: 3px 7px 20px rgba(255, 255, 255, 0.2);
}

input {
  background: transparent;
  border: none;
  outline: none;
  color: white;
  display: block;
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  padding: 1rem;
}

.light {
  color: black;
}

.light::placeholder {
  color: rgba(0, 0, 0, 0.33);
}

.dark {
  color: white;
}

.dark::placeholder {
  color: rgba(255, 255, 255, 0.298);
}

.wrapper {
  position: fixed;
  height: 300px;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
}
</style>
