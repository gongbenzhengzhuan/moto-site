<template>
  <div class="Order">
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in images" :key="index">
<!--        这里直接用img标签也可以  https://blog.csdn.net/weixin_46526878/article/details/120107565?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1-120107565-blog-123294035.235^v38^pc_relevant_anti_vip&spm=1001.2101.3001.4242.2&utm_relevant_index=4-->
        <van-image :src="item.pic"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {reactive} from 'vue'
//注册组件
import { Button, Swipe, SwipeItem, Image } from 'vant';
export default {
  name: 'Order',
  setup() {
    const images = [
      {pic:require("@/assets/images/tubiao.jpg")},
      {pic:require("@/assets/images/user.jpg")},
    ];
    return {
      images
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image
  },
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 0px;
  text-align: center;
  background-color: #39a9ed;
  width: 100%;
  height: 100%;
}
</style>
