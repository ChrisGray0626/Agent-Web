<script lang="ts" setup>
import CenterBox from "/src/components/CenterBox.vue";
import TitleBar from "/src/components/TitleBar.vue";
import LeftBox from "/src/components/LeftBox.vue";
</script>

<template>
  <div>
    <el-container>
      <el-header>
        <TitleBar />
      </el-header>
      <el-container>
        <el-aside>
          <LeftBox />
        </el-aside>
        <el-main>
          <CenterBox />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
</style>
