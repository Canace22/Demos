<template>
  <div class="container">
     <codemirror ref="cmEditor" class="code-mirror" v-model="code" :options="cmOptions" @changes="getCode"/>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

export default {
  components: {
    codemirror,
  },
  data() {
    return {
      code: '{\n  "name": "demos",\n  "version": "0.1.0",\n  "private": true,\n  "scripts": {\n    "serve": "vue-cli-service serve",\n    "build": "vue-cli-service build",\n    "lint": "vue-cli-service lint",\n    "test:e2e": "vue-cli-service test:e2e",\n    "test:unit": "vue-cli-service test:unit"\n  },\n  "dependencies": {\n    "babylonjs": "^4.2.0",\n    "codemirror": "^5.62.2",\n    "core-js": "^2.6.5",\n    "file-saver": "^2.0.2",\n    "flv.js": "^1.5.0",\n    "interactjs": "^1.4.0-rc.13",\n    "paper": "^0.12.3",\n    "pixi.js": "^5.2.0",\n    "three": "^0.111.0",\n    "vue": "^2.6.10",\n    "vue-codemirror": "^4.0.6",\n    "vue-router": "^3.4.8",\n    "vuedraggable": "^2.24.3"\n  },\n  "devDependencies": {\n    "@vue/cli-plugin-babel": "^3.9.0",\n    "@vue/cli-plugin-e2e-nightwatch": "^3.9.0",\n    "@vue/cli-plugin-eslint": "^3.9.0",\n    "@vue/cli-plugin-unit-mocha": "^3.9.0",\n    "@vue/cli-service": "^3.9.0",\n    "@vue/eslint-config-airbnb": "^4.0.0",\n    "@vue/test-utils": "1.0.0-beta.29",\n    "animejs": "^3.1.0",\n    "babel-eslint": "^10.0.1",\n    "chai": "^4.1.2",\n    "eslint": "^5.16.0",\n    "eslint-plugin-vue": "^5.0.0",\n    "node-sass": "^4.9.0",\n    "pixelsmith": "^2.4.1",\n    "sass-loader": "^7.1.0",\n    "vue-template-compiler": "^2.6.10"\n  }\n}\n',
      cmOptions: {
        tabSize: 4,
        mode: {
          name: 'javascript',
          json: true,
        },
        theme: 'material',
        lineNumbers: true,
        line: true,
        viewportMargin: Infinity,
      },
    };
  },
  methods: {
    getCode() {
      console.log(JSON.stringify(this.code));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
/deep/.CodeMirror {
  height: 100vh;
}
</style>
