<template>

  <div class="common-layout">
    <el-container>
      <el-header></el-header>
      <el-container>
        <el-aside width="200px">
        </el-aside>
        <el-main>
          <div id="look">不会翻车的摩托车niken</div>
          <br/><br/>
          <vue3VideoPlay
              width="800px"
              title="钢铁侠"
              :src="options.src"
              :poster="options.poster"
              @play="onPlay"
              @pause="onPause"
              @timeupdate="onTimeupdate"
              @canplay="onCanplay"/>
        </el-main>
      </el-container>
    </el-container>
  </div>


</template>


<script setup lang="ts">
import {reactive} from 'vue';

const options = reactive({
  src: "https://www.qukanbbc.com/v7/video/redirectLink?appId=3ap17jiy&channelId=bgx093yt&messageId=OCMS55e715b497495d6f", //视频源
  poster: '', //封面
})
const onPlay = (ev) => {
  console.log('播放')
}
const onPause = (ev) => {
  console.log(ev, '暂停')
}

const onTimeupdate = (ev) => {
  console.log(ev, '时间更新')
}
const onCanplay = (ev) => {
  console.log(ev, '可以播放')
}
</script>

<style scoped>
#look {
  position: relative;
  /*text-align: center;*/
}
</style>