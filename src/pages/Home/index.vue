<script lang="ts" setup>
import TopBox from "@/pages/Home/components/TopBox.vue";
import LeftBox from "@/pages/Home/components/LeftBox.vue";
import RightBox from "@/pages/Home/components/RightBox.vue";
import Question from "@/components/Question.vue";
</script>

<template>
  <div style="height: 100%; width: 100%">
    <el-container>
      <el-header height="60px">
        <TopBox />
      </el-header>
      <el-container>
        <el-aside width="50%">
          <LeftBox />
        </el-aside>
        <el-main>
          <RightBox />
          <Question />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
@import "./index.less";
</style>
