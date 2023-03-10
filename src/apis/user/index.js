import request from "../request";

export const testUser = async()=>{
  return await request.get("/user/getInfo/1")
}
