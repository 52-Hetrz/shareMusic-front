import request from "../../request";

const preUrl = "/movie/info"

/**
 * 获取电影分享的详细信息
 * @param id 电影分享的id
 * @returns {Promise<void>} 具体信息
 *  <pre>
 * 返回格式：
 * {
 *   attr:Object 具体信息
 *   images: Array 图片列表
 *   comments:Array 评论
 * }
 * </pre>
 */
export const getInfo = async (id) =>{
  const {data : res} = await request.get(preUrl+"/"+id)
  return res
}
