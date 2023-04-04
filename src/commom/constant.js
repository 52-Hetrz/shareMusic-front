

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
  leadActor:'',
  releaseTime:'',
  area:'',
  score:0,
  tags:[],
  sources:[],
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
export const LIFE_SESSION_USER_NAME = "lifeUserName"

export const MOVIE_SOURCE_IMAGES = {
  bilibili:"bilibili.svg",
  YOUKU:'YOUKU.svg',
  Tencent:'Tencent2.svg',
  QIY:'QIY.png',
  MiGu:'MiGu.jpg'
}

export const MOVIE_SOURCE_STYLE = {
  bilibili:"width: 40px;height: 40px",
  YOUKU:"width: 40px;height: 40px",
  Tencent:"width: 50px;height: 60px;margin-top:-12px",
  QIY:"width: 50px;height: 50px;margin-top:-5px",
  MiGu:"width: 60px;height: 50px;margin-top:-8px;margin-left:-7px"
}

export const RESULT_CODE = {
  NO_MORE_PUBLISHED_MOVIE: 5005
}

export const MOVIE_STAR_TEXTS=["极差","很差","一般","推荐","力荐"]
