<template>
  <div class="mainContainer" :style="generateGradient()">
    <div class="container">
      <h2 class="header2">Do you like Gradientos?</h2>
      <p class="paragraph">Share it with friends!</p>
      <a
        class="btn"
        href="https://twitter.com/intent/tweet?text=https://www.gradientos.app"
      >
        <span>Share</span>

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
          class="svg"
        >
          <path
            d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareSection',
  props: ['colors', 'direction'],
  methods: {
    generateGradient() {
      return {
        background: `linear-gradient(
    ${this.direction}deg,
    ${this.colors[0]},
    ${this.colors[1]}
  )`,
      };
    },
  },
};
</script>

<style scoped>
.mainContainer {
  display: flex;
  justify-content: center;
  padding: 4rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.header2 {
  margin: 0.5rem;
  font-size: 3rem;
  color: white;
  font-weight: 400;
}

.btn {
  border: none;
  outline: none;
  border-radius: 5px;
  background: #0c121b;
  color: white;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 400 !important;
  letter-spacing: 3px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 2rem;
  display: flex;
  align-items: center;
}

/* .btn > span {
  transition: all 0.3s ease-in-out;
  transform: translateX(20px);
}

.btn:hover span {
  transform: scale(6) translateX(-200px);
} */

.btn:hover {
  transform: scale(1.1);
}

.paragraph {
  color: white;
  font-size: 1.5rem;
  margin-top: 0.5rem;
}

.svg {
  margin-left: 0.8rem;
}
</style>
