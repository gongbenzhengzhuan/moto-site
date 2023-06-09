<template>
  <div class="article" deep="5">
    <h1 class="title" style="text-align:center;">免责声明</h1>
    <!-- 作者区域 -->
    <div class="author" style="padding:15px 0;">
      <div class="info">
        <!-- 文章数据信息 -->
        <div class="meta" data-filtered="filtered">
          <!-- 如果文章更新时间大于发布时间，那么使用 tooltip 显示更新时间
          <span class="publish-time" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="最后编辑于 2021-10-07 09:05"> 2021-10-07 09:05</span>
          <span class="views-count">查看 3224</span>
          -->
        </div>
      </div>
    </div>
    <!-- -->
    <!-- 文章内容 -->
    <div class="show-content art-content">
      <p>宫本数据所登载的数据来自于各类统计信息、统计公报等公开信息，以及非人工方式生成的衍生数据，受限于现有技术水平、各信息来源更新不同步等原因，对数据的展示， 并不视为宫本数据对其数据的真实性、准确性、完整性、时效性作出任何形式的确认或担保。&nbsp;</p><p>请您在依据宫本数据相关信息作出判断或决策前，自行进一步核实此类信息的完整或准确性，并自行承担使用后果。同时，宫本数据承诺将不断提升技术水平，逐步完善信息质量与更新频次，为您提供更高质量的服务。</p>            </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: "NoReponsibility"
}
</script>

<style scoped>
.article {
  padding: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
</style>