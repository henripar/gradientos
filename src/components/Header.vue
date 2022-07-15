<template>
  <header>
    <img class="logo" alt="Vue logo" src="../assets/logo.png" />
    <h1 class="header1">{{ text }}</h1>
    <h2 :class="darkmode ? 'dark' : 'light'">
      See gradients applied on common UI elements on a live demo website.
    </h2>
    <a
      href="https://www.producthunt.com/posts/gradientos?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-gradientos"
      target="_blank"
      class="phBadge"
      v-if="!darkmode"
      ><img
        src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=324433&theme=dark&period=daily"
        alt="Gradientos - Find&#0032;and&#0032;test&#0032;gradients&#0032;easily | Product Hunt"
        style="width: 250px; height: 54px"
        width="250"
        height="54"
    /></a>
    <a
      href="https://www.producthunt.com/posts/gradientos?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-gradientos"
      target="_blank"
      class="phBadge"
      v-if="darkmode"
      ><img
        src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=324433&theme=neutral&period=daily"
        alt="Gradientos - Find&#0032;and&#0032;test&#0032;gradients&#0032;easily | Product Hunt"
        style="width: 250px; height: 54px"
        width="250"
        height="54"
    /></a>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['darkmode', 'text'],
  components: {},
  methods: {
    buttonClick() {
      console.log('clicked!');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
}

.header1 {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 65px;
  text-align: center;

  background: linear-gradient(180deg, #d770b2 0%, #e4ad7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin: 2rem;
  max-width: 419px;
}

h2 {
  width: 497px;
  margin: 2rem;
}

.logo {
  border-radius: 20px;
  height: 80px;
  margin: 2rem;
}

.phBadge {
  margin: 2rem;
}

.dark {
  color: white;
}

.light {
  color: black;
}

@media screen and (max-width: 520px) {
  h2 {
    max-width: auto;
    width: auto;
  }
}
</style>
