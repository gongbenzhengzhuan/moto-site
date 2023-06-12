<template>
  <div class="common-layout">
    <el-container  class="layout-container-demo" style="height: 500px">
      <el-container>
        <el-aside width="100px">产品展示厅</el-aside>
        <el-main>

          <div class="demo-collapse" id="text">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="离线数仓方案" name="12">
                <div>微量级：mysql+davinci+xxjob</div>
                <br/><br/>
                <div>轻量级：hive+davinci+azkaban</div>
                <br/><br/>
                <a href="http://81.70.71.16:8092/" target="_blank" rel="nexus">离线数仓方案</a>
              </el-collapse-item>
              <el-collapse-item title="音乐网站" name="1" id = "look">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E9%9F%B3%E4%B9%90%E7%BD%91%E7%AB%99?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7v3qUvGaLweXRbw4%2F20230605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230605T010621Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=42aab690099ef6385331495fc1550e98caf5cbff066dadbc4d6d527f868ef6a6" width="160" height="160">
                <br/><br/>
                <a href="http://gongben.top/music/front" target="_blank" rel="nexus">音乐网站</a>
              </el-collapse-item>
              <el-collapse-item title="若依网站" name="2">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E8%8B%A5%E4%BE%9D%E7%BD%91%E7%AB%99?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7v3qUvGaLweXRbw4%2F20230605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230605T010524Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=270130c1a80aaa0aec5c139d856e75da16115e8736a790aa22d9bb8d8d701002" width="160" height="160">
                <br/><br/>
                <a href="http://82.156.135.173:20712/ruoyi/front" target="_blank" rel="nexus">若依网站</a>
              </el-collapse-item>
              <el-collapse-item title="书网站" name="3">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E4%B9%A6%E7%BD%91%E7%AB%99?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7v3qUvGaLweXRbw4%2F20230605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230605T010436Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4c0fa81181bdda07c7c58f5f7b6d630e9ed11966d9a1dea6c0d04f0502f92add" width="160" height="160">
              </el-collapse-item>
              <el-collapse-item title="个人网站" name="4">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7v3qUvGaLweXRbw4%2F20230605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230605T010346Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b4622892fea342b8bb3725509d80d3d2d833e71164770165756d32d15b73b0d8" width="160" height="160">
                <br/><br/>
                <a href="http://82.156.135.173:20712/vue-project/front/#/" target="_blank" rel="nexus">个人网站</a>
              </el-collapse-item>
              <el-collapse-item title="微信公众号" name="5">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7v3qUvGaLweXRbw4%2F20230605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230605T012712Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=54d4d729c7ab164ab5aeb44aba25f46cac6157c32c4b94b189be0add2915a184" width="160" height="160">
              </el-collapse-item>
              <el-collapse-item title="小泥鳅游戏" name="6">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E5%B0%8F%E6%B3%A5%E9%B3%85%E6%B8%B8%E6%88%8F?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7v3qUvGaLweXRbw4%2F20230605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230605T003217Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=95f72e6bd100ee909f7050a95af0129d203c467611d9c0ea3dd1e0fc3ad5e799" width="160" height="160">
              </el-collapse-item>
              <el-collapse-item title="开心消消乐" name="7">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7v3qUvGaLweXRbw4%2F20230606%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230606T100633Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c114a7996be344682074008eae52f0386187485ed729997ee20035e42b66d655" width="160" height="160">
              </el-collapse-item>
              <el-collapse-item title="微信小程序-哈皮店" name="8">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E5%93%88%E7%9A%AE%E5%BA%97?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7v3qUvGaLweXRbw4%2F20230605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230605T011451Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2fc2d1a0396eb1df4866af86df921577167987438991181574c709aad0b8af5a"                   width="160" height="160">
              </el-collapse-item>
              <el-collapse-item title="支付宝小程序" name="9">
                <div> 请扫码进入！</div>
                <img src="http://101.37.117.226:9090/wdhcr/%E5%B0%8F%E6%B3%A5%E9%B3%85%E5%95%86%E5%9F%8E?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7v3qUvGaLweXRbw4%2F20230605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230605T012031Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=273679a773f09445766956c7dc37b551392e2ca3fc874a463b523671b07c6cdd" width="160" height="160">
              </el-collapse-item>
              <el-collapse-item title="管理系统-前端1" name="10">
                <br/><br/>
                <a href="http://82.156.135.173:20712/vue-vite-admin/front" target="_blank" rel="nexus">管理系统-前端1</a>
              </el-collapse-item>
              <el-collapse-item title="管理系统-前端2" name="11">
                <br/><br/>
                <a href="http://82.156.135.173:20712/vue3-system-template/front" target="_blank" rel="nexus">管理系统-前端2</a>
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