<template>
  <div class="article">
    <h1 class="title" style="text-align:center;">关于我们</h1>
    <!-- 作者区域 -->
    <div class="author" style="padding:15px 0;">
      <div class="info">
        <!-- 文章数据信息 -->
        <div class="meta">
          <!-- 如果文章更新时间大于发布时间，那么使用 tooltip 显示更新时间
          <span class="publish-time" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="最后编辑于 2021-10-07 09:22"> 2021-10-07 09:22</span>
          <span class="views-count">查看 7617</span>
          -->
        </div>
      </div>
    </div>
    <!-- -->
    <!-- 文章内容 -->
    <div class="show-content art-content">
      <p>宫本数据是一款宏观数据搜索与展示查询工具，旨在为用户提供快速查询的集合信息服务平台。通过对宏观数据、行业数据、区域数据等信息的全面及时整合，挖掘关联数据，降低数据流通壁垒，让用户更了解数据信息的价值！</p>            </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style scoped>
.article {
  text-align: center;
  padding: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
</style>