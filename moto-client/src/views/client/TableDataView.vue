<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="日期" width="180" />
    <el-table-column prop="name" label="标题" width="180" />
    <el-table-column prop="address" label="正文" />
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2023/3/10',
    name: '不得了啦，无极又弄了个250大绵羊——快来围观！',
    address: '据AK47从二舅隔壁翠花的男朋友的小姑子处得知，重庆本土品牌无极或将在近期推出一款250mL级别踏板车型。就已知信息来看.....',
  },
  {
    date: '2023/3/13',
    name: '又一款高配置ADV踏板上市，MVCAGIVA“周末疯”150发布售价14998元起',
    address: '150ADV踏板市场又迎来了一位新朋友，2023年3约12日MV CAGIVA在广州发布旗下ADV150踏板“周末疯”。',
  },
  {
    date: '2023/3/10',
    name: '一起寻找春天的味道丨VICTORIA 「麦田绿」新色袭人',
    address: '逢春不游乐，但恐是痴人早春三月，草长莺飞',
  },
  {
    date: '2023/3/10',
    name: '不得了啦，无极又弄了个250大绵羊——快来围观！',
    address: '据AK47从二舅隔壁翠花的男朋友的小姑子处得知，重庆本土品牌无极或将在近期推出一款250mL级别踏板车型。就已知信息来看.....',
  },
  {
    date: '2023/3/13',
    name: '又一款高配置ADV踏板上市，MVCAGIVA“周末疯”150发布售价14998元起',
    address: '150ADV踏板市场又迎来了一位新朋友，2023年3约12日MV CAGIVA在广州发布旗下ADV150踏板“周末疯”。',
  },
  {
    date: '2023/3/10',
    name: '一起寻找春天的味道丨VICTORIA 「麦田绿」新色袭人',
    address: '逢春不游乐，但恐是痴人早春三月，草长莺飞',
  },
  {
    date: '2023/3/10',
    name: '不得了啦，无极又弄了个250大绵羊——快来围观！',
    address: '据AK47从二舅隔壁翠花的男朋友的小姑子处得知，重庆本土品牌无极或将在近期推出一款250mL级别踏板车型。就已知信息来看.....',
  },
]
</script>
