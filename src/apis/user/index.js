import request from "../request";

const preUrl = "/user"

/** 用户注册api */
export const register = async(model)=>{
  const {data:res} = await request.post(preUrl+"/register",model)
  return res;
}

/** 用户登录 */
export const login = async(model)=>{
  const {data:res} = await request.post(preUrl+"/login",model)
  return res;
}

export const checkCookie = async(cookie)=>{
  const {data:res} = await request.post(preUrl+"/check",cookie)
  return res
}
