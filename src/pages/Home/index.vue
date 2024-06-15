<script lang="ts" setup>
import TopBox from "@/pages/Home/components/TopBox.vue";
import LeftBox from "@/pages/Home/components/LeftBox.vue";
import RightBox from "@/pages/Home/components/RightBox.vue";
import Question from "@/components/Question.vue";
import NodeConfig from "@/components/nodeConfig/index.vue";
</script>

<template>
  <div style="height: 100%; width: 100%">
    <el-container>
      <el-header height="60px">
        <TopBox />
      </el-header>
      <el-container>
        <el-aside width="25%">
          <LeftBox />
        </el-aside>
        <el-main>
          <RightBox />
          <Question />
        </el-main>
        <el-aside width="25%">
          <NodeConfig />
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
@import "./index.less";
</style>
