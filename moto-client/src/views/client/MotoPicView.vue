<template>
  <div id="look">
  <div>闪亮登场</div>
    <div class="block text-center" m="t-4">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in cars" :key="item" :src="url">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

<!--  <div class="demo-image">-->
<!--    <div v-for="fit in fits" :key="fit" class="block">-->
<!--      <span class="demonstration">{{ fit }}</span>-->
<!--      <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />-->
<!--    </div>-->
<!--  </div>-->
  <br/><br/>
  <div>踏板车</div>
  <div class="demo-image__lazy">
    <el-image v-for="url in urls_taban" :key="url" :src="url"  />
  </div>
  <br/><br/><br/><br/>
  <div>赛车</div>
  <div class="demo-image__lazy">
    <el-image v-for="url in urls_saiche" :key="url" :src="url" />
  </div>
  <br/><br/><br/><br/>
  <div>复古车</div>
  <div class="demo-image__lazy">
    <el-image v-for="url in urls_halei" :key="url" :src="url" lazy />
  </div>
  </div>
</template>

<script lang="ts" setup>
const cars = ['复古车', '太子车', '踏板车', '赛车', '街车']
const fits = ['填充', '包含', '覆盖', '局部', '缩小']
const url =
    'https://upload.newmotor.com.cn/newmotor_newimg/UploadFiles/2021-11/202111191449460832_S.jpg';

const urls_taban = [
  'https://upload.newmotor.com.cn/newmotor_newimg/UploadFiles/2022-02/202202251427356299_S.png',
  'https://upload.newmotor.com.cn/newmotor_newimg/UploadFiles/2021-11/202111191449460832_S.jpg',
  'https://upload.newmotor.com.cn/newmotor_newimg/UploadFiles/2022-11/202211041037231474_S.png',
  'https://upload.newmotor.com.cn/newmotor_newimg/UploadFiles/2022-11/202211041524248716_S.jpg',
];
const urls_saiche = [
  'https://upload.newmotor.com.cn/newmotor_newimg/UploadFiles/2022-09/202209151048501700_S.png',
  'https://upload.newmotor.com.cn/newmotor_newimg/UploadFiles/2021-09/202109191752141902_S.jpg',
  'https://upload.newmotor.com.cn/newmotor_newimg/UploadFiles/2022-04/202204120935076092_S.jpg',
  'https://upload.newmotor.com.cn/newmotor_newimg/UploadFiles/2022-02/202202181341255203_S.jpg',
];
const urls_halei = [
  'https://img3.newmotor.com.cn/UploadFiles/image/20190528/20190528113398639863.jpg',
  'https://upload.newmotor.com.cn/newmotor_newimg/UploadFiles/2021-08/202108181426294692_S.jpg',
  'https://upload.newmotor.com.cn/newmotor_newimg/UploadFiles/2021-01/202101181120489609_S.jpg',
  'https://upload.newmotor.com.cn/newmotor_newimg/UploadFiles/2022-01/202201111645557557_S.jpg',
  'https://img2.newmotor.com.cn/UploadFiles/2019-04/13188/2019042210400183343_S.jpg',
]
</script>

<style scoped>
.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}

#look {
  text-align: center;
}

/*.el-carousel__item h3 {*/
/*  color: #475669;*/
/*  opacity: 0.75;*/
/*  line-height: 200px;*/
/*  margin: 0;*/
/*  text-align: center;*/
/*}*/

/*.el-carousel__item:nth-child(2n) {*/
/*  background-color: #99a9bf;*/
/*}*/

/*.el-carousel__item:nth-child(2n + 1) {*/
/*  background-color: #d3dce6;*/
/*}*/

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
