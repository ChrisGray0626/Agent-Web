<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="title">
      Task Name
      <img src="../assets/task-rename.svg" />
    </div>
    <div class="button">+ New Task</div>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  border: 1px #e4e7ed solid;
  background-color: #fff;
  font-size: 32px;
}
.title {
  position: relative;
}
img {
  position: absolute;
  left: calc(100% + 10px);
  top: 0;
  bottom: 0;
  margin: auto;
}
.button {
  position: absolute;
  right: 10px;
  height: 50px;
  width: 150px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  border-radius: 8px;
  background-color: #000;
  color: #fff;
}
</style>
