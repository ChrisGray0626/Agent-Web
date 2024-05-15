<script lang="ts" setup>
import HelloWorld from "./HelloWorld.vue";
</script>

<template>
  <div class="container">
    <div>
      <a href="https://vuejs.org/" target="_blank">
        <img alt="Vue logo" class="logo vue" src="/src/assets/vue.svg" />
      </a>
    </div>
    <HelloWorld msg="Agent-Web" />
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  max-width: calc(100% -470px);
  min-width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
