<template>
<!--  https://blog.csdn.net/u012563853/article/details/129363095-->
<!--  https://element-plus.gitee.io/zh-CN/component/color.html#￤ﾸﾻ￨ﾉﾲ-->
  <div :class="{ dark: isDark }">
    <h1>{{ msg }}</h1>
    <el-button type="primary">Primary</el-button>
    <h1>Dark Mode Demo</h1>
    <p>Current mode: {{ isDark ? 'Dark' : 'Light' }}</p>
    <button @click="toggleTheme">Toggle Theme</button>
  </div>
</template>
<script setup>
import {
  ref
} from 'vue'
import {
  useDark
} from '@/utils/useDark'
defineProps({
  msg: String
})

const dark = useDark()

const isDark = ref(dark.isDark)
const toggleTheme = () => {
  dark.toggle()
}
const count = ref(0)
</script>
<style>
.dark {
  /*background-color: #333;*/
  background-color: #337ecc;
  /* red */
  color: #fff;
}
.light {
  transition: all 0.5s ease;
  background-color: #fff;
  color: #000;
}
</style>