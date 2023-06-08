<template>
  <el-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 100" :key="item"  class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
import { HttpManager } from "@/api";
import {defineComponent} from "vue";
export default defineComponent({
  setup() {
    const songPic =["https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png","https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png","https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"]
    return {
      songPic,
      attachImageUrl: HttpManager.attachImageUrl,
    };
  }
})
</script>

<style scoped>
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>
