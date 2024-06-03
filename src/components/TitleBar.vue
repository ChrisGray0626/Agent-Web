<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="title">
      Task Name
      <img src="../assets/task-rename.svg" />
    </div>
    <button>+ New Task</button>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 100%;
  height: 100%;
  background-color: #fff;
  .title {
    position: relative;
    font-size: 20px;
    img {
      position: absolute;
      left: calc(100% + 10px);
      top: 0;
      bottom: 0;
      margin: auto;
      width: 25px;
    }
  }
  button {
    position: absolute;
    right: 10px;
    height: 40px;
    width: 110px;
    font-size: 15px;
    text-align: center;
    line-height: 34px;
    border-radius: 5px;
    background-color: #000;
    border-color: #000;
    color: #fff;
  }
}
</style>
