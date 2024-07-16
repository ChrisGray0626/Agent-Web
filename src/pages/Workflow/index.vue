<script lang="ts" setup>
import TopBox from "@/pages/Workflow/components/TopBox.vue";
import LeftBox from "@/pages/Workflow/components/LeftBox.vue";
import RightBox from "@/pages/Workflow/components/RightBox.vue";
</script>

<template>
  <div style="height: 100%; width: 100%">
    <el-container>
      <el-header height="60px">
        <TopBox />
      </el-header>
      <el-container>
        <el-aside width="35%">
          <LeftBox />
        </el-aside>
        <el-main>
          <RightBox />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
@import "./index.less";
</style>
