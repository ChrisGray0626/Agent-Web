<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="input">
      <span>Please type your question here</span>
      <img src="../assets/send.svg" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 4px 4px 0 rgba(1C, 1C, 1C, 0.2);
  border-radius: 10px;
  .input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    margin: 0 20px;
    width: 100%;
    background-color: #f7f9fb;
    border-radius: 10px;
    color: #828282;
  }
}
img {
  width: 20px;
  height: 20px;
}
</style>
