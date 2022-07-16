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
          isCSSBackgroundCopied
            ? 'Copied!'
            : 'background: linear-gradient(to right, ' +
              colors[0] +
              ', ' +
              colors[1] +
              ');'
        }}</code>

        <button
          @click="copyCSSCode('background')"
          :style="darkmode ? { color: 'white' } : { color: 'black' }"
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
`background: linear-gradient(to right, ${colors[0]}, 
${colors[1]});
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;`
}}
</code>
</pre>
        <button
          @click="copyCSSCode('text')"
          :style="darkmode ? { color: 'white' } : { color: 'black' }"
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
  props: ['colors', 'darkmode'],
  data() {
    return {
      isCSSBackgroundCopied: false,
      isCSSTextCopied: false,
    };
  },
  methods: {
    copyCSSCode(type) {
      if (type === 'background') {
        let code =
          'background: linear-gradient(to right, ' +
          this.colors[0] +
          ', ' +
          this.colors[1] +
          ');';
        navigator.clipboard.writeText(code);
        this.isCSSBackgroundCopied = true;
        setTimeout(() => {
          this.isCSSBackgroundCopied = false;
        }, 1000);
      } else if (type === 'text') {
        let code = `
        background: linear-gradient(to right, ${this.colors[0]}, ${this.colors[1]});
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
button:hover {
  background: #ececec16;
  cursor: pointer;
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

pre {
  display: inline-flex;
}

p {
  margin: 1rem 0;
}

/* .codeContainer {
  margin: 2rem 0;
} */
</style>