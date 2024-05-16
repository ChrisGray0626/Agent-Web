<script lang="ts" setup>
import CenterBox from "/src/components/CenterBox.vue";
import TitleBar from "/src/components/TitleBar.vue";
import LeftBox from "/src/components/LeftBox.vue";
import Question from "../../components/Question.vue";
</script>

<template>
  <div style="height: 100%; width: 100%">
    <el-container>
      <el-header height="80px">
        <TitleBar />
      </el-header>
      <el-container>
        <el-aside>
          <LeftBox />
        </el-aside>
        <el-main>
          <CenterBox />
          <Question />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
@import "./index.less";
</style>
