<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div>街车 | 复古车 | 踏板车</div>
      </el-header>
      <el-container>
      <el-aside width="200px">
        <inject-echart-view></inject-echart-view>
        </el-aside>
      <el-main>
        <div id="look">
         摩托车新闻主页
        </div>
        <table-data-view></table-data-view>
      </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import InjectEchartView from "@/views/client/InjectEchartView";
import TableDataView from "@/views/client/TableDataView";
export default {
  name: "NewsView",
  components: {TableDataView, InjectEchartView}
}
</script>

<style scoped>
.common-layout .el-header {
  text-align: center;
  position: relative;
  /*background-color: var(--el-color-primary-light-9);*/
  /*color: var(--el-text-color-primary);*/
}

#look {
  text-align: center;
}
</style>