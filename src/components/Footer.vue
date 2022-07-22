<template>
  <div :class="['container', darkmode ? 'darkBG' : 'lightBG']">
    <span
      class="signature"
      :style="darkmode ? { color: '#fff' } : { color: 'black' }"
    >
      <span>Made with </span>
      <span class="iconContainer">
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
          className="{styles.icon}"
        >
          <defs>
            <linearGradient id="MyGradient">
              <stop offset="5%" stop-color="{{colors[0]}}" />
              <stop offset="95%" stop-color="{{colors[1]}}" />
            </linearGradient>
          </defs>
          <path
            d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"
          ></path>
        </svg>
      </span>
      <span>by</span>
      <a
        href="https://twitter.com/webdevolution_"
        class="twitterLink"
        :style="{
          background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }"
      >
        <span>Henri Parviainen</span>
      </a>
      <span>from</span>
      <a
        href="https://www.webdevolution.com"
        class="twitterLink"
        :style="{
          background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }"
      >
        Webdevolution
      </a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'footer',
  props: ['colors', 'darkmode'],
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 5rem 1rem;
}

.iconContainer {
  margin: 0 0.5rem;
  display: flex;
}

.signature {
  display: flex;
  align-items: center;
  color: white;
}

.twitterLink {
  text-decoration: none;
  color: white;
  font-weight: 600;
  margin: 0 0.5rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

.darkBG {
  background: linear-gradient(to left, #0c121b, #000);
}

.darkText {
  color: white;
}

.lightText {
  color: #000;
}

.lightBG {
  background: linear-gradient(90deg, #fcfcfc, #ffeabf33);
}

@media screen and (max-width: 500px) {
  .signature {
    flex-direction: column;
  }

  .signature > span,
  .signature > a {
    margin: 0.5rem auto !important;
  }
  .iconContainer {
    margin: 0;
  }
}
</style>
