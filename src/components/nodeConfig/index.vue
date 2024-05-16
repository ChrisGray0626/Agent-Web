<script setup lang="ts">
import {Plus} from "@element-plus/icons-vue";
import {ref} from "vue";

const inputs = ref([
  {
    name: "",
    value: ""
  }
])

const outputs = ref([
  {
    name: "",
    value: ""
  }
])

function addInput() {
  inputs.value.push({
    name: "",
    value: ""
  })
}

function addOutput() {
  outputs.value.push({
    name: "",
    value: ""
  })
}
</script>
<template>
  <div class="container">
    <div class="inputText">
      <el-text size="large" class="text">输入</el-text>
      <el-icon color="#1511FA" size="14" class="icon" @click="addInput">
        <Plus/>
      </el-icon>
    </div>
    <div>
      <el-row>
        <el-col :span="12">
          <el-text>Name</el-text>
        </el-col>
        <el-col :span="12">
          <el-text>Value</el-text>
        </el-col>
      </el-row>
    </div>
    <div>
      <div class="inputBox">
        <div v-for="item in inputs" :key="item.name">
          <el-row>
            <el-col :span="11">
              <el-input v-model="item.name" class="input"></el-input>
            </el-col>
            <el-col :span="1"/>
            <el-col :span="12">
              <el-input v-model="item.value" class="input"></el-input>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="inputText">
      <el-text size="large" class="text">输出</el-text>
      <el-icon color="#1511FA" size="14" class="icon" @click="addOutput">
        <Plus/>
      </el-icon>
    </div>
    <div>
      <el-row>
        <el-col :span="12">
          <el-text>Name</el-text>
        </el-col>
        <el-col :span="12">
          <el-text>Value</el-text>
        </el-col>
      </el-row>
    </div>
    <div>
      <div class="inputBox">
        <div v-for="item in outputs" :key="item.name">
          <el-row>
            <el-col :span="11">
              <el-input v-model="item.name" class="input"></el-input>
            </el-col>
            <el-col :span="1"/>
            <el-col :span="12">
              <el-input v-model="item.value" class="input"></el-input>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "./index.less";
</style>