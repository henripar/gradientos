<template>
  <div>
    <div
      :class="[
        'copyCSSModalContainer',
        darkmode ? 'darkContainer' : 'lightContainer',
      ]"
    >
      <p>CSS for Background</p>
      <div class="codeContainer">
        <code :class="['cssValue', darkmode ? 'darkBox' : 'lightBox']">{{
          isCSSBackgroundCopied ? 'Copied!' : gradientCodeLine
        }}</code>

        <button
          @click="copyCSSCode('background')"
          :style="darkmode ? { color: 'white' } : { color: 'black' }"
          :class="darkmode ? 'dark' : 'light'"
        >
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
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path
              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
            ></path>
          </svg>
        </button>
      </div>
      <p>CSS for Text</p>
      <div class="codeContainer">
        <pre>
        <code :class="['cssValue', darkmode ? 'darkBox' : 'lightBox']"
          >{{ isCSSTextCopied ? `Copied!

          ` :
`${gradientCodeLine}
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;`
}}
</code>
</pre>
        <button
          @click="copyCSSCode('text')"
          :style="darkmode ? { color: 'white' } : { color: 'black' }"
          :class="darkmode ? 'dark' : 'light'"
        >
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
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path
              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CopyCSSModal',
  props: ['colors', 'darkmode', 'direction'],
  data() {
    return {
      isCSSBackgroundCopied: false,
      isCSSTextCopied: false,
    };
  },
  methods: {
    copyCSSCode(type) {
      if (type === 'background') {
        let code = this.gradientCodeLine;
        navigator.clipboard.writeText(code);
        this.isCSSBackgroundCopied = true;
        setTimeout(() => {
          this.isCSSBackgroundCopied = false;
        }, 1000);
      } else if (type === 'text') {
        let code = `
        ${this.gradientCodeLine}
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;`;

        navigator.clipboard.writeText(code);
        this.isCSSTextCopied = true;
        setTimeout(() => {
          this.isCSSTextCopied = false;
        }, 1000);
      }
    },
  },
  computed: {
    gradientCodeLine() {
      return `background: linear-gradient(${this.direction}deg, ${this.colors[0]}, ${this.colors[1]});`;
    },
  },
};
</script>

<style scoped>
.copyCSSModalContainer {
  position: fixed;
  top: 250px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  backdrop-filter: blur(12px) !important;
  padding: 1rem;
  border-radius: 12px;
  z-index: 1000;
  width: inherit;
}

.darkContainer {
  background: rgba(0, 0, 0, 0.569);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.lightContainer {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.cssValue {
  padding: 1rem;
  display: inline-flex;
  border-radius: 9px;
  width: 440px;
  background: rgba(255, 255, 255, 0.134);
}

.darkBox {
  background: rgba(255, 255, 255, 0.134);
}

.lightBox {
  background: rgba(227, 227, 227, 0.425);
}

.codeContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dark:hover {
  background: #ececec16;
}

.light:hover {
  background: rgba(227, 227, 227, 0.425);
}

button {
  background: transparent;
  border: none;
  padding: 1rem;
  color: white;
  margin-left: 0.5rem;
  border-radius: 7px;
  height: 51px;
}

button:hover {
  cursor: pointer;
}

pre {
  display: inline-flex;
}

code {
  font-family: monospace;
}

p {
  margin: 1rem 0;
  font-weight: 600;
}

@media screen and (max-width: 680px) {
  .copyCSSModalContainer {
    max-width: 90%;
  }
  .cssValue {
    overflow-x: auto;
  }
  pre {
    max-width: 87%;
  }
}

@media screen and (max-width: 450px) {
  .copyCSSModalContainer {
    left: 50%;
    width: 90%;
    top: 250px;
  }
}
</style>
