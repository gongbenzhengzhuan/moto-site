<template>
  <div>
    <div id="main"></div>
    <div id="moto_type">摩托类型统计</div>
    <div id="maychar"></div>
    <div id="moto_new">摩托车新闻统计</div>
  </div>
</template>

<script lang="js">
import { defineComponent, onMounted, inject } from "vue"; // 主要
import * as echarts from 'echarts'
export default defineComponent({
  setup() {
    onMounted(() => {
      change();
      changetype();
    });
    //https://blog.csdn.net/m0_46114541/article/details/127771279
    //https://blog.csdn.net/qq_57035859/article/details/126363323
    //let echarts = inject("echarts"); // 主要
    // 基本柱形图
    const change = () => {
      const chartBox = echarts.init(document.getElementById("main")); // 主要
      const option = {
        xAxis: {
          data: ["街车", "复古车", "踏板车", "太子车", "巡航车", "越野车", "拉力车"],
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            data: [23, 24, 18, 25, 27, 28, 25],
          },
        ],
      };
      chartBox.setOption(option);
      // 根据页面大小自动响应图表大小
      window.addEventListener("resize", function () {
        chartBox.resize();
      });
    };
    // 折线图
    const changetype = () => {
      // 获取组件实例
      const machart = echarts.init(document.getElementById("maychar"));
      // 设置配置项
      const option = {
        xAxis: {
          data: ["A", "B", "C", "D", "E"],
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: "line",
            stack: "x",
          },
          {
            data: [5, 4, 3, 5, 10],
            type: "line",
            stack: "x",
          },
        ],
      };
      // 复制
      machart.setOption(option);
      // 根据页面大小自动响应图表大小
      window.addEventListener("resize", function () {
        machart.resize();
      });
    };
    return {
      changetype,
    };
  },
});
</script>

<style lang="scss" scoped>
#main {
  min-width: 15.25rem;
  min-height: 15.25rem;
  text-align: center;
  // max-height: 500px;
}

#maychar {
  max-height: 250px;
  text-align: center;
  // max-height: 400px;
  height: 250px;
}

#moto_type {
  text-align: center;
}

#moto_new {
  text-align: center;
}
</style>