import axios from 'axios'
import {globalUrl} from "../main";
import router from "../router";

axios.defaults.withCredentials = true;

// 初始化实例
let request = axios.create({
  // 这里是全局统一加上了 '/api' 前缀，也就是说所有接口都会加上'/api'前缀在
  // 页面里面写接口的时候就不要加 '/api'了，否则会出现2个'/api'，类似 '/api/api/user'这样的报错，切记！！！
  baseURL:"/api"
})

//请求白名单，如果在白名单里，则不会被拦截
const whiteUrls=["/admin/login","/admin/register"]

// 请求拦截器。拦截客户端发出的请求，并进行处理
request.interceptors.request.use((config) => {
  let userId = sessionStorage.getItem("userId")
  config.headers['Authorization'] = userId
  // config.headers['Content-Type'] = 'application/json;charset=utf-8';
  //
  // //取出sessionStorage里面缓存的用户信息
  // let userJSON=sessionStorage.getItem("user");
  //
  // // 检验请求白名单
  // if(!whiteUrls.includes(config.url)){
  //   if (!userJSON){
  //     router.push("/login")
  //   }else {
  //     let user=JSON.parse(userJSON);
  //     // 设置请求头
  //     config.headers["token"]=user.token;
  //   }
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器。拦截服务器发回的响应并进行处理
request.interceptors.response.use(response=> {
  let res = response.data;
  // 如果是返回的文件
  if (response.config.responseType === 'blob') {
    return res
  }
  // 兼容服务端返回的字符串数据
  if (typeof res === 'string') {
    res = res ? JSON.parse(res) : res
  }
  //验证token
  // if (res.code==='51'||res.code==='52') {
  //   console.error("token已经过期,请重新登入")
  //   router.push("/login")
  // }
  return response;
}, (error) => {

  return Promise.reject(error)
})

export default request
