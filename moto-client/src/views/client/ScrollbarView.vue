<template>
  <div id = "look">
  <div>踏板车</div>
  <el-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 10" :key="item"  class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </el-scrollbar>
  <br/><br/>
  <div>太子车</div>
  <el-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in picItem" :key="item"  class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </el-scrollbar>
  <br/><br/>
  <div>巡航车</div>
  <el-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in picList" :key="item"  class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </el-scrollbar>
  <br/><br/>
  </div>
</template>

<script lang="ts">
import { HttpManager } from "@/api";
import {computed, defineComponent} from "vue";
import { useStore } from "vuex";
import {picList} from "@/enums";

export default defineComponent({
  setup() {
    const songPic =["https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png","https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png","https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"]
    const store = useStore();
    const picItem = computed(() => store.getters.picItem);

    return {
      songPic,
      picItem,
      attachImageUrl: HttpManager.attachImageUrl,
      picList,
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

#look {
  text-align: center;
}
</style>
