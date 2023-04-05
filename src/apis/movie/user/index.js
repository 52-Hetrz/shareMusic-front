import request from "../../request";

const preUrl = '/movie/user'

export const publishMovie = async (model)=>{
  const {data : res} = await request.post(preUrl+"/publish",model,{
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
  return res
}

export const getPublishedMovie = async (start, size)=>{
  const {data : res} = await request.get(preUrl+"/published/"+start+"/"+size)
  return res
}

export const deleteMovieShare = async (id)=>{
  const {data:res} = await request.delete(preUrl+"/delete/"+id)
  return res
}
