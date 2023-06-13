<template>
  <div class="common-layout">
    <el-container  class="layout-container-demo" style="height: 500px">
      <el-container>
        <el-aside width="100px">我的爱好</el-aside>
        <el-main>
          <div class="demo-collapse" id="text">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="软件书" name="1" id = "look">
                <br/><br/>
                <a href="http://101.37.117.226:9090/wdhcr/%E6%95%8F%E6%8D%B7%E5%BC%80%E5%8F%91%E7%9A%84%E8%89%BA%E6%9C%AF" target="_blank" rel="nexus">软件开发的艺术</a>
                <br/><br/>
                <a href="http://101.37.117.226:9090/wdhcr/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91%E6%9C%AC%E8%B4%A8" target="_blank" rel="nexus">软件开发本质</a>
                <br/><br/>
                <a href="http://101.37.117.226:9090/wdhcr/%E6%95%8F%E6%8D%B7%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91" target="_blank" rel="nexus">敏捷软件开发</a>
                <br/><br/>
                <a href="http://101.37.117.226:9090/wdhcr/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84" target="_blank" rel="nexus">算法小抄</a>
                <br/><br/>
              </el-collapse-item>
              <el-collapse-item title="哲学书籍" name="2" >
                <br/><br/>
                <a href="http://101.37.117.226:9090/wdhcr/%E7%9F%9B%E7%9B%BE%E8%AE%BA" target="_blank" rel="nexus">矛盾论</a>
                <br/><br/>
                <a href="http://101.37.117.226:9090/wdhcr/%E5%AE%9E%E8%B7%B5%E8%AE%BA" target="_blank" rel="nexus">实践论</a>
                <br/><br/>
                <a href="http://101.37.117.226:9090/wdhcr/%E8%8B%A6%E9%9A%BE%E8%BE%89%E7%85%8C" target="_blank" rel="nexus">苦难辉煌</a>
                <br/><br/>
              </el-collapse-item>
              <el-collapse-item title="音乐" name="3" >
                <br/><br/>
                <a href="http://101.37.117.226:9090/wdhcr/%E5%8C%86%E5%8C%86%E9%82%A3%E5%B9%B4" target="_blank" rel="nexus">匆匆那年</a>
                <br/><br/>
                <a href="http://101.37.117.226:9090/wdhcr/%E6%9C%88%E4%BA%AE%E4%BB%A3%E8%A1%A8%E6%88%91%E7%9A%84%E5%BF%83" target="_blank" rel="nexus">月亮代表我的心</a>
                <br/><br/>
              </el-collapse-item>
            </el-collapse>
          </div>


        </el-main>
      </el-container>
    </el-container>
  </div>


</template>

<script lang="ts" setup>
// export default {
//   name: "ProductView"
// }
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<style scoped>
.layout-container-demo .el-aside {
  position: relative;
  background-color: var(--el-color-primary-light-9);
  color: var(--el-text-color-primary);
}

h2 {
  text-align: center;
}

#look {
  text-align: center;
}

#text {
  text-align: center;
}
</style>