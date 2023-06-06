<template>
  <h2>相似度接口服务</h2>
  <div id="text">
    原始文本：<input type="text" placeholder="原始文本" v-model="productInfo.textFirst">
    比较文本：<input type="text" placeholder="比较文本" v-model="productInfo.textSecond">
    <el-button type="info" size="small" @click="TextDiff()">查看相似度</el-button>
    <span>相似度：{{ textSimilarity }}</span>
  </div>
  <br/><br/>
  <h2>关键词接口服务</h2>
  <div id="keyword">
    文本：<input type="text" placeholder="原始文本" v-model="productInfo.content">
    <el-button type="info" size="small" @click="keywordFunction()">查看关键词</el-button>
    <span>关键词：{{ textKeyword }}</span>
  </div>
</template>

<script>
import {reactive,ref} from 'vue';
import {getKeyword, getArticleDiff} from '@/api/api'
const textSimilarity = ref();
const textKeyword = ref();
export default {
  name: "AlgorithmView",
  setup() {
    // 文本框双向绑定的值
    const productInfo = reactive({textFirst:"向天再借五百年",textSecond:"向天再借五百年",content:"向天再借五百年"});

    //查看功能
    function TextDiff() {
      const dataForm = {
        content_first:productInfo.textFirst,
        content_second:productInfo.textSecond
      }

      getArticleDiff(dataForm).then(
          response => {
            let data = response.data;
            console.log("textdiff:"+data)
            textSimilarity.value=data
          }
      )
    }

    //提取关键词
    function keywordFunction(){
      getKeyword (productInfo.content).then(
          response => {
            let code = response.code
            textKeyword.value=response.data;
            console.log("关键词:" + response.data)
          })
    }

    // 暴露方法到页面上
    return {productInfo,TextDiff,textSimilarity,keywordFunction,textKeyword}

  }
}
</script>

<style scoped>

</style>