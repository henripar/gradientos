<template>
  <div :class="[darkmode ? 'darkBG' : 'lightBG', 'typographyContainer']">
    <div class="container" :style="createCSSVariables()">
      <h2 :class="darkmode ? 'dark' : 'light'">Typography</h2>
      <p :class="darkmode ? 'darkP' : 'light'">
        Text is a major component in almost any project.
      </p>
      <p :class="darkmode ? 'darkP' : 'light'">
        This section will help you decide if the gradient does justice for your
        content.
      </p>
      <span :class="['label', darkmode ? 'darkP' : 'light']">Header 1</span>
      <h3 class="gradientText h1">
        Almost before we knew it, we had left the ground.
      </h3>
      <span :class="['label', darkmode ? 'darkP' : 'light']">Header 2</span>
      <h3 class="gradientText h2">
        Almost before we knew it, we had left the ground.
      </h3>
      <span :class="['label', darkmode ? 'darkP' : 'light']">Header 3</span>
      <h3 class="gradientText h3">
        Almost before we knew it, we had left the ground.
      </h3>
      <span :class="['label', darkmode ? 'darkP' : 'light']">Header 4</span>
      <h3 class="gradientText h4">
        Almost before we knew it, we had left the ground.
      </h3>
      <span :class="['label', darkmode ? 'darkP' : 'light']">Paragraph</span>
      <p class="gradientText p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ullamcorper sed dolor vitae hendrerit. Donec sed commodo leo, a mattis
        lectus. Donec tempus, turpis vel interdum vulputate, orci ex rutrum
        nisi, maximus consequat erat ex et dui. Curabitur viverra iaculis lacus,
        sed tincidunt dui condimentum sed.
      </p>
    </div>
    <a
      href="https://www.dpbolvw.net/click-100548218-14069012"
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
      <span class="hoverUnderlineAnimation"> NordVPN </span>
      2-years plan with 65% off for only $3.65/mo
    </a>
  </div>
</template>

<script>
export default {
  name: 'typography',
  props: ['colors', 'darkmode', 'direction'],
  methods: {
    createCSSVariables() {
      return {
        '--gradient-color-1': this.colors[0],
        '--gradient-color-2': this.colors[1],
        '--gradient-direction': this.direction + 'deg',
      };
    },
  },
};
</script>

<style scoped>
.typographyContainer {
  padding: 2rem;
  padding-bottom: 8rem;
}

.container {
  text-align: left;
  width: 65%;
  display: block;
  margin: 0 auto;
}
.darkBG {
  background: #0c121b;
}

.lightBG {
  background: linear-gradient(90deg, #fcfcfc, #ffeabf33);
}

.dark {
  color: white;
}

.darkP {
  color: #ffffffb5;
}

.light {
  color: black;
}
h2 {
  margin: 0.5rem 0;
  font-weight: 800;
  font-size: 72px;
  margin-bottom: 1.5rem;
}
.h1 {
  font-size: 60px;
}

.h2 {
  font-size: 48px;
}

.h3 {
  font-size: 36px;
}

.h4 {
  font-size: 24px;
}
.p {
  font-size: 18px;
  font-weight: 500;
}
p {
  font-size: 32px;
  font-weight: 300;
}

.spanFont {
  font-weight: 200;
  font-size: 22px;
}

.gradientText {
  background: linear-gradient(
    var(--gradient-direction),
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.label {
  font-size: 24px;
  font-weight: 300;
  margin-top: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.adContainer {
  display: block;
  margin: 4rem auto 1rem auto;
  width: fit-content;
  padding: 1rem 2rem;
  border-radius: 7px;
  font-size: 1.2rem;
  font-weight: 300;
}

.hoverUnderlineAnimation {
  display: inline-block;
  position: relative;
  font-weight: 600;
  cursor: pointer;
  margin-right: 0.3rem;
  text-decoration: none;
}

@media screen and (max-width: 925px) {
  .container {
    width: 80%;
  }
}

@media screen and (max-width: 770px) {
  p {
    font-size: 24px;
  }
}

@media screen and (max-width: 570px) {
  h2 {
    font-size: 48px;
  }

  .h1 {
    font-size: 48px;
  }

  .h2 {
    font-size: 36px;
  }

  .h3 {
    font-size: 24px;
  }

  .h4 {
    font-size: 18px;
  }
  .p {
    font-size: 14px;
    font-weight: 500;
  }
}

@media screen and (max-width: 530px) {
  .container {
    width: 90%;
  }
}
</style>
