

// 用户登录
export const LOGIN_INFO = {
  name:"",
  password:"",
}
// 用户注册
export const REGISTER_INFO={
  name:"",
  password:"",
  repeatPassword:"",
  email:"",
}
// 发布音乐分享
export const TO_PUBLISH_MUSIC={
  title:'',
  musicName:'',
  content:'',
  link:'',
  images:[]
}
export const TO_PUBLISH_MOVIE={
  title:'',
  movieName:'',
  content:'',
  director:'',
  leaderActor:'',
  releaseTime:'',
  area:'',
  tags:[],
  source:[],
  images:[],
}

export const TAG_TYPE={
  'music':'Music',
  'movie':'Movie',
}
export const MUSIC_TAG = 'Music'
export const MOVIE_TAG = 'Movie'

// 用户cookie的名称
export const LIFE_COOKIE = 'lifeUser'
// session中存储的用户id
export const LIFE_SESSION_USER_ID = "lifeUserId"
