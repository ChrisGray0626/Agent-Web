<script lang="ts" setup>
import HelloWorld from "./HelloWorld.vue";
import Flow from "/src/components/flow/index.vue";
</script>

<template>
  <div class="container">
    <Flow />
    <!--    <div>-->
    <!--      <a href="https://vuejs.org/" target="_blank">-->
    <!--        <img alt="Vue logo" class="logo vue" src="/src/assets/vue.svg" />-->
    <!--      </a>-->
    <!--    </div>-->
    <!--    <HelloWorld msg="Agent-Web" />-->
  </div>
</template>

<style lang="less" scoped>
.container {
  // position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
