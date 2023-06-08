<template>
  <h2>用户管理</h2>
    <div id="look">
      用户名称：<input type="text" placeholder="请输入用户名称" v-model="productInfo.login">
<!--      密码：<input type="text" placeholder="请输入密码" v-model="productInfo.password">-->
      <el-select v-model="productInfo.password" class="m-2" placeholder="Select" size="small">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-button type="info" size="small" @click="GetUserInfo()">查看</el-button>
    </div>
  <div id="big">
    <!-- 导入element框架的表格 -->
    <!--    https://blog.csdn.net/qq_38567039/article/details/128057929-->
    <el-table :data="tableData" border style="width: 100%" ref="addForm">
      <el-table-column type="selection" width="55" align="center"/>
      <el-table-column prop="id" label="编号" align="center"/>
      <el-table-column prop="login" label="登陆人" align="center"/>
      <el-table-column prop="password" label="密码" align="center"/>
      <el-table-column prop="role" label="角色" align="center"/>
      <el-table-column label="操作" align="center" width="200" #default="scope">
        <el-button type="danger" size="small" @click="del(scope.$index,scope.row.id)">删除</el-button>
        <el-button type="primary" size="small" @click="show(scope.$index,scope.row)">修改</el-button>
        <el-button type="info" size="small" @click="GetUserInfo()">查看</el-button>
      </el-table-column>
    </el-table>
  </div>
  <div id="page">
    起始页：<input type="number" placeholder="请输入起始页" v-model="productInfo.pageIndex">
    页数：<input type="number" placeholder="请输入页数" v-model="productInfo.pageSize">
  </div>

  <!-- 模式窗口 -->
  <fieldset>
    <legend>用户详情</legend>
    编号：<input type="number" placeholder="请输入编号" v-model="productInfo.id">
    <br/><br/>
    用户名称：<input type="text" placeholder="请输入用户名称" v-model="productInfo.login">
    <br/><br/>
    密码：<input type="text" placeholder="请输入密码" v-model="productInfo.password">
    <br/><br/>
    角色：<input type="number" placeholder="请输入角色" v-model="productInfo.role">
    <br/><br/>

    <el-button type="success" @click="add()">添加</el-button>
    <el-button type="primary" @click="update()">修改</el-button>
    <el-button type="danger">批量删除</el-button>

  </fieldset>

</template>
<script lang="ts">
/*https://vue3.chengpeiquan.com/component.html*/
import {onBeforeMount, reactive,ref} from 'vue';
import {deleteUser, userAdd, userPageList,getArticleDiff} from '@/api/api'
import store from "@/store";
const textSimilarity = ref();

export default {
  setup() {
    // 定义要渲染到页面的初始数据
    const tableData = reactive([
      {
        id: "1",
        login: '农夫山泉',
        password: "abc",
        role: "1"
      },
    ]);

    const options = reactive([
      {
        value: '全选',
        label: '',
      },
      // {
      //   value: 'Option2',
      //   label: 'Option2',
      // },
      // {
      //   value: 'Option3',
      //   label: 'Option3',
      // },
      // {
      //   value: 'Option4',
      //   label: 'Option4',
      // },
      // {
      //   value: 'Option5',
      //   label: 'Option5',
      // },
    ]);

    onBeforeMount(() => {
      console.log(2)
      store.commit('increment',"刘骏")
      store.commit('storePassword',"cbaguss")
      GetUserInfo()
      console.log(3)
    })

    // 文本框双向绑定的值
    const productInfo = reactive({id: "", login: "", password: "", role: "",pageIndex:"1",pageSize:"10",textFirst:"向天再借五百年",textSecond:"向天再借五百年"});

    // 删除功能，传索引行数
    function del(index: number, id: number) {
      console.log("id:" + id)
      deleteUser(id).then(
          response => {
            let code = response.code
            console.log("删除成功:" + code)
          })

      // splice方法，传两个参数：第几行开始，删除多少条（如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素）
      tableData.splice(index, 1)

    }

    //查看功能
    function TextDiff() {
      const dataForm = {
        content_first:productInfo.textFirst,
        content_second:productInfo.textSecond
      }

      getArticleDiff(dataForm).then(
          response => {
            let data = response.data;
            console.log("textdiff:"+data)
            textSimilarity.value=data
          }
      )
    }

    //查看功能
    function GetUserInfo() {
      const loginForm = {
        pageIndex: productInfo.pageIndex,
        pageSize: productInfo.pageSize,
        login: productInfo.login
      }

      console.log("loginname:"+productInfo.login)
      console.log("productInfo.password:"+productInfo.password)
      console.log("pageindex:"+loginForm.pageIndex)
      console.log("pagesize:"+loginForm.pageSize)
      const tokenstr = window.sessionStorage.getItem("token")
      console.log("token:"+tokenstr)
      userPageList(loginForm).then(
          response => {
            let data = response.data;
            let code = response.code
            console.log(code)

            if (null === data) return console.log('内容为空')
            console.log(data)
            //清空页面数据
            tableData.splice(0)
            data.forEach(
                element => {
                  options.push(
                      {
                        value: element.login,
                        label: element.login
                      }
                  )

                  tableData.push(
                      {
                        id: element.id,
                        login: element.login,
                        password: element.password,
                        role: element.role
                      }
                  );
                }
            );
          }
      )
    }

    // 添加功能
    function add() {
      // 定义对象，存储从文本框获取到的数据
      const addArray = {
        id: productInfo.id,
        login: productInfo.login,
        password: productInfo.password,
        role: productInfo.role
      }
      // push方法，添加一条数据到初始数据的数组中
      tableData.push(addArray);

      userAdd(addArray).then(
          response => {
            let code = response.code
            console.log("添加成功:" + code)
          })

    }

    // 点击表格上的修改按钮，把该行信息显示到文本框里
    // 传该行的下标（index）与该行（row）信息过来，渲染文本框
    // 注意：要是index参数虽然在这里看似没有用上，但是不写index参数会不实现功能的！！！！
    function show(index: number, row: any) {
      productInfo.id = row.id;
      productInfo.login = row.login;
      productInfo.password = row.password;
      productInfo.role = row.role;
    }

    // 修改功能
    function update() {
      // 也是一样的定义一个对象，用于存储文本框的数据
      const updateArray = {
        id: productInfo.id,
        login: productInfo.login,
        password: productInfo.password,
        role: productInfo.role,
      }

      userAdd(updateArray).then(
          response => {
            let code = response.code
            console.log("修改成功:" + code)
          })
      // 返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
      // 大意就是：传入一个参数（id），让id与文本框里的id对比，找到两个id相同的哪个元素，保存
      const index = tableData.findIndex(o => o.id === updateArray.id);
      // 然后删掉index找到的那一条元素，先删，然后再添加文本框里面的数据到数组中
      // splice方法的第三个参数是添加一条新元素到数组里
      tableData.splice(index, 1, updateArray)
    }

    // 暴露方法到页面上
    return {tableData, del, productInfo, add, show, update, GetUserInfo,options,TextDiff,textSimilarity}
  }
}
</script>
<style scoped>
h2 {
  text-align: center;
}

#big {
  width: 80%;
  margin: auto;
}

#look {
  width: 40%;
  margin-left: 10%;
  margin-top: 30px;
}

#page {
  width: 40%;
  margin-left: 10%;
  margin-top: 30px;
  margin-bottom: 30px;
}

fieldset {
  width: 40%;
  margin: auto;
  /*margin-left: 10%;*/
  /*margin-top: 30px;*/
}
</style>