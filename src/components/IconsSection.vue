<template>
  <div :style="generateBackground()" class="container">
    <div :style="createCSSVariables" class="cardRow">
      <div class="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="140"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="svgicon"
        >
          <defs>
            <linearGradient id="MyGradient">
              <stop offset="5%" stop-color="var(--gradient-color-1)" />
              <stop offset="95%" stop-color="var(--gradient-color-2)" />
            </linearGradient>
          </defs>
          <path
            class="hihi"
            d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"
          ></path>
          <path class="hihi" d="M13.73 21a2 2 0 01-3.46 0"></path>
        </svg>
        <h2 class="iconHeader">Alert</h2>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div class="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="140"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="svgicon"
        >
          <path
            class="hihi"
            d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042l-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893l-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042l.348-1.97M7.48 20.364l3.126-17.727"
          ></path>
        </svg>
        <h2 class="iconHeader">Bitcoin</h2>
        <p class="paragraph">Est, officia temporibus doloremque aliquam.</p>
      </div>
    </div>
    <div :style="createCSSVariables" class="cardRow">
      <div class="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="140"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="svgicon"
        >
          <path
            class="hihi"
            d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"
          ></path>
        </svg>
        <h2 class="iconHeader">Like</h2>
        <p class="paragraph">Alias, delectus, minima adipisci vel commodi.</p>
      </div>
      <div class="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="140"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="svgicon"
        >
          <path class="hihi" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle class="hihi" cx="12" cy="7" r="4"></circle>
        </svg>
        <h2 class="iconHeader">Profile</h2>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, sint.
        </p>
      </div>
    </div>
    <p
      class="adContainer"
      :style="
        darkmode
          ? {
              background: '#141c28',
              color: '#fff',
            }
          : {
              background: '#f5f5f5',
              color: '#000',
            }
      "
    >
      <a
        href="https://www.dpbolvw.net/click-100548218-14069012"
        class="hoverUnderlineAnimation"
      >
        NordVPN
      </a>
      2-years plan with 65% off for only $3.65/mo
    </p>
  </div>
</template>

<script>
export default {
  name: 'IconsSection',
  props: ['darkmode', 'colors'],
  methods: {
    generateBackground() {
      if (this.darkmode === true) {
        return {
          background: '#0c121b',
        };
      } else {
        return {
          background: '#fff',
        };
      }
    },
  },
  computed: {
    createCSSVariables() {
      return {
        '--gradient-color-1': this.colors[0],
        '--gradient-color-2': this.colors[1],
        '--var-color-text': this.darkmode ? '#fff' : '#000',
        '--var-color-text-small': this.darkmode
          ? 'rgba(255,255,255,0.7)'
          : 'rgba(0,0,0,0.7)',
      };
    },
  },
};
</script>

<style scoped>
.hihi {
  stroke: url(#MyGradient);
}
.cardRow {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 2rem 0;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  text-align: center;
}

.paragraph {
  color: var(--var-color-text-small);
  font-size: 1.2rem;
  margin: 1rem;
}

.container {
  padding: 4rem;
}

.iconHeader {
  color: var(--var-color-text);
  margin: 1rem;
}

.adContainer {
  display: block;
  margin: 4rem auto 1rem auto;
  width: fit-content;
  color: var(--var-color-text-small);
  padding: 1rem 2rem;
  border-radius: 7px;
  font-size: 1.2rem;
}

.hoverUnderlineAnimation {
  display: inline-block;
  position: relative;
  color: var(--var-color-text);
  font-weight: 600;
  cursor: pointer;
  margin-right: 0.3rem;
  text-decoration: none;
}

.hoverUnderlineAnimation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  bottom: -4px;
  left: 0;
  background-image: linear-gradient(
    to right,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hoverUnderlineAnimation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media screen and (max-width: 800px) {
  .card {
    width: 100%;
  }
  .cardRow {
    flex-direction: column;
  }
}

@media screen and (max-width: 700px) {
  .svgicon {
    height: 100px;
    width: 100px;
  }
  .hoverUnderlineAnimation {
    margin: 0.5rem auto;
    width: fit-content;
    display: block;
  }

  .adContainer {
    text-align: center;
  }
}
</style>
