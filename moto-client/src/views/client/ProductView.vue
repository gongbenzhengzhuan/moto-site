<template>
  <div class="common-layout">
    <el-container  class="layout-container-demo" style="height: 500px">
      <el-container>
        <el-aside width="100px">产品展示厅</el-aside>
        <el-main>

          <div class="demo-collapse" id="text">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="音乐网站" name="1" id = "look">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E9%9F%B3%E4%B9%90%E7%BD%91%E7%AB%99" width="160" height="160">
                <br/><br/>
                <a href="http://gongben.top/music/front" target="_blank" rel="nexus">音乐网站</a>
              </el-collapse-item>
              <el-collapse-item title="若依网站" name="2">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E8%8B%A5%E4%BE%9D%E7%BD%91%E7%AB%99" width="160" height="160">
                <br/><br/>
                <a href="http://82.156.135.173:20712/ruoyi/front" target="_blank" rel="nexus">若依网站</a>
              </el-collapse-item>
              <el-collapse-item title="书网站" name="3">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E4%B9%A6%E7%BD%91%E7%AB%99" width="160" height="160">
              </el-collapse-item>
              <el-collapse-item title="个人网站" name="4">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99" width="160" height="160">
                <br/><br/>
                <a href="http://82.156.135.173:20712/vue-project/front/#/" target="_blank" rel="nexus">个人网站</a>
              </el-collapse-item>
              <el-collapse-item title="微信公众号" name="5">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7" width="160" height="160">
              </el-collapse-item>
              <el-collapse-item title="小泥鳅游戏" name="6">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E5%B0%8F%E6%B3%A5%E9%B3%85%E6%B8%B8%E6%88%8F" width="160" height="160">
              </el-collapse-item>
              <el-collapse-item title="开心消消乐" name="7">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90" width="160" height="160">
              </el-collapse-item>
              <el-collapse-item title="微信小程序-哈皮店" name="8">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E5%93%88%E7%9A%AE%E5%BA%97"                   width="160" height="160">
              </el-collapse-item>
              <el-collapse-item title="支付宝小程序" name="9">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E5%B0%8F%E6%B3%A5%E9%B3%85%E5%95%86%E5%9F%8E" width="160" height="160">
              </el-collapse-item>
              <el-collapse-item title="管理系统-前端1" name="10">
                <br/><br/>
                <a href="http://82.156.135.173:20712/vue-vite-admin/front" target="_blank" rel="nexus">管理系统-前端1</a>
              </el-collapse-item>
              <el-collapse-item title="管理系统-前端2" name="11">
                <br/><br/>
                <a href="http://82.156.135.173:20712/vue3-system-template/front" target="_blank" rel="nexus">管理系统-前端2</a>
              </el-collapse-item>
              <el-collapse-item title="离线数仓方案" name="12">
                <div>微量级：mysql+davinci+xxjob</div>
                <br/><br/>
                <div>轻量级：hive+davinci+azkaban</div>
                <br/><br/>
                <a href="http://81.70.71.16:8092/" target="_blank" rel="nexus">离线数仓方案(账号guest密码123456)</a>
              </el-collapse-item>
              <el-collapse-item title="权限管理" name="13">
                <div>shiro权限管理</div>
                <br/><br/>
                <a href="http://81.70.71.16:8093/" target="_blank" rel="nexus">shiro权限管理(admin,123456)</a>
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