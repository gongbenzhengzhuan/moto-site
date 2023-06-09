import { RouterName } from "./router-name";

export const enum NavName {
  Home = "首页",
  SongSheet = "歌单",
  Singer = "歌手",
  Personal = "个人主页",
  Setting = "设置",
  SignIn = "登录",
  SignUp = "注册",
  SignOut = "退出",
  Algorithm = "算法",
  UserCrud = "用户",
  MotoPic = "摩托图片分类",
  News = "摩托车新闻",
  Product = "产品展示厅",
  MainHome = "服务理念",
  ScrollPic = "滚动图片",
  Video = "摩托视频",
  HelloWorld ="主题色",
  Canvas = "钟表",
}

// 左侧导航栏
export const HEADERNAVLIST = [
  {
    name: NavName.MainHome,
    path: RouterName.MainHome,
  },
  {
    name: NavName.News,
    path: RouterName.News,
  },
  {
    name: NavName.MotoPic,
    path: RouterName.MotoPic,
  },
  {
    name: NavName.Video,
    path: RouterName.Video,
  },
  // {
  //   name: NavName.Canvas,
  //   path: RouterName.Canvas,
  // },
  // {
  //   name: NavName.SongSheet,
  //   path: RouterName.SongSheet,
  // },
  // {
  //   name: NavName.Singer,
  //   path: RouterName.Singer,
  // },
  {
    name: NavName.Algorithm,
    path: RouterName.Algorithm,
  },
  {
    name: NavName.Product,
    path: RouterName.Product,
  },
  // {
  //   name: NavName.HelloWorld,
  //   path: RouterName.HelloWorld,
  // },
  // {
  //   name: NavName.ScrollPic,
  //   path: RouterName.ScrollPic,
  // },

  // {
  //   name: NavName.UserCrud,
  //   path: RouterName.UserCrud,
  // },
];

// 右侧导航栏
export const SIGNLIST = [
  {
    name: NavName.SignIn,
    path: RouterName.SignIn,
  },
  {
    name: NavName.SignUp,
    path: RouterName.SignUp,
  },
];

// 用户下拉菜单项
export const MENULIST = [
  {
    name: NavName.Personal,
    path: RouterName.Personal,
  },
  {
    name: NavName.Setting,
    path: RouterName.Setting,
  },
  {
    name: NavName.SignOut,
    path: RouterName.SignOut,
  },
];
