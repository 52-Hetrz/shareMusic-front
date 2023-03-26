import request from "../request";
import {TAG_TYPE} from "../../commom/constant";



/** Tag */
const tagUrl = '/tag'
/** 获取所有音乐标签 */
export const allMusicTags = async() =>{
  const{data:res} = await request.get(tagUrl + '/allTags/' + TAG_TYPE.music)
  return res
}

/** 获取所有电影标签 */
export const allMovieTags = async() =>{
  const{data:res} = await request.get(tagUrl + '/allTags/' + TAG_TYPE.movie)
  return res
}


/** Source */
const sourceUrl = '/source'

/** 获取所有电影的播放源 */
export const allMovieSources = async()=>{
  const{data:res} = await request.get(sourceUrl+'/allSource/'+TAG_TYPE.movie)
  return res
}
