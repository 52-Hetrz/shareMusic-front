import request from "../request";

export const testUser = async()=>{
  return await request.get("/user/getInfo/1")
}

export const register = async(model)=>{
  const {data:res} = await request.post("/user/register",model)
  console.log(res)
  return res;
}
