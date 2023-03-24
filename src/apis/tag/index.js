import request from "../request";
import {TAG_TYPE} from "../../commom/constant";

const preUrl = '/tag'

export const allMusicTags = async() =>{
  const{data:res} = await request.get(preUrl + '/allTags/' + TAG_TYPE.music)
  return res
}
