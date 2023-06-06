// 引入axios
import axios from 'axios'
import request from '@/utils/request'
// 请求延时（毫秒数，如果请求话费超过了'timeout'的时间，请求将被中断）
axios.defaults.timeout = 100000

export const getAllData = params => {
    return axios.get(`/vue-project/datasystem-client/labelManage/getLabelFeature?id=10991`,{ params: params });
};

export const getLabel=() => {
    return axios.get(`/vue-project/datasystem-client/labelManage/getLabelFeature?id=10991`,{withCredentials: true});
};

export function getArticleList (id) {
    return request({
        url: '/vue-project/datasystem-client/labelManage/getLabelFeature',
        method: 'GET',
        id
    })
}

export function getKeyword (content) {
    return request({
        url: '/vue-project/algorithm/getKeyword?content='+content,
        method: 'GET',
        content
    })
}

export const getArticleDiff=(data)=> {
    return request({
        url: '/vue-project/algorithm/editDistance',
        method: 'post',
        data
    })
}

export const alldata=(data)=> {
    return request({
        url: '/vue-huawei/datasystem-client/workbenchSearchForLog/pageList',
        method: 'post',
        data
    })
}

export const login=(data)=> {
    return request({
        url: '/vue-project/login/userLogin',
        method: 'post',
        data
    })
}

// 用户分页查询
export const userPageList=(data)=> {
    return request({
        url: '/vue-project/user/userList',
        method: 'post',
        data
    })
}

// 用户添加
export const userAdd=(data)=> {
    return request({
        url: '/vue-project/user/userInsert',
        method: 'post',
        data
    })
}

// 用户删除
export function deleteUser (id) {
    return request({
        url: '/vue-project/user/userDelete?id='+id,
        method: 'GET'
    })
}

// 角色分页查询
export const rolePageList=(data)=> {
    return request({
        url: '/vue-project/role/pageList',
        method: 'post',
        data
    })
}

export default {alldata}