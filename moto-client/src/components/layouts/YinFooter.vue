<template>
  <div class="yin-footer">
    <div class="footer ifooter">
      <p>
<!--        <a target="_blank" href="http://localhost:9002/#/contactUs">联系我们</a> |
        <a target="_blank" href="http://localhost:9002/#/aboutMe">关于我们</a> |
        <a target="_blank" href="http://localhost:9002/#/noReponsibility">免责声明</a> |
        <a target="_blank" href="http://localhost:9002/#/userConsult">用户协议</a> |
        <a target="_blank" href="https://cybermap.kaspersky.com/cn">地图</a>-->
        <a target="_blank" href="http://82.156.135.173:20712/moto/client/front/#/contactUs">联系我们</a> |
        <a target="_blank" href="http://82.156.135.173:20712/moto/client/front/#/aboutMe">关于我们</a> |
        <a target="_blank" href="http://82.156.135.173:20712/moto/client/front/#/noReponsibility">免责声明</a> |
        <a target="_blank" href="http://82.156.135.173:20712/moto/client/front/#/userConsult">用户协议</a> |
        <a target="_blank" href="https://cybermap.kaspersky.com/cn">地图</a>
      </p>
    </div>
    <p v-for="(item, index) in footerList" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, readonly } from "vue";

export default defineComponent({
  setup() {
    const footerList = readonly([
      // "关于 | 帮助 | 条款 | 反馈",
      "Copyright © 2023 dzl",
      "京ICP备2023013015号 | https://beian.miit.gov.cn",
    ]);

    return { footerList };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";
@import "@/assets/css/global.scss";

.yin-footer {
  width: 100%;
  height: $footer-height;
  padding: 20px 0;
  box-sizing: border-box;
  font-size: 14px;
  @include layout(center, center, column);
}

p {
  height: 30px;
}
</style>
