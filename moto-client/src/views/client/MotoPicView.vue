<template>
  <div class="common-layout">
    <el-container>
      <el-header></el-header>
      <el-main><div id="look">摩托车图片分类展示</div>
        <br/><br/>
      <scrollbar-view></scrollbar-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import ScrollbarView from "@/views/client/ScrollbarView";
export default {
  name: "MotoPicView",
  components: {ScrollbarView}
}
</script>

<style scoped>
#look {
  text-align: center;
}
</style>