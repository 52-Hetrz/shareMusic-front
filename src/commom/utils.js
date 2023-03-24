/**
 * 对一个对象进行深度拷贝
 * @param obj 需要拷贝的对象
 */
export const deepCopy = function(obj){
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] && typeof obj[key] === "object") {
            objClone[key] = deepCopy(obj[key]);
          } else {
            objClone[key] = obj[key];
          }
        }
      }
    }
    return objClone;
}

/**
 * 向浏览器中添加一个cookie
 * @param cookieName cookie的名称
 * @param cookieValue cookie的值
 * @param existDay 存在的时间（天）
 */
export const setCookie = function (cookieName, cookieValue, existDay){
  let d = new Date()
  d.setTime(d.getTime()+(existDay*24*60*60*1000))
  let expires = "expires="+d.toUTCString()
  document.cookie = cookieName+"="+cookieValue+"; "+expires
}

/**
 * 从浏览器中获取一个cookie
 * @param cookieName cookie的名称
 * @returns {string} cookie的值，如果没有该cookie则返回''
 */
export const getCookie = function (cookieName){
  let name = cookieName + '=';
  let ca = document.cookie.split(';');
  for(let i=0; i<ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name)===0) { return c.substring(name.length,c.length); }
  }
  return '';
}

/**
 * 删除用户cookie
 * @param cookieName 需要删除的cookie的名称
 */
export const deleteCookie = (cookieName)=>{
  document.cookie = cookieName+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
}

export const showTypeMessage = (_this, msg, type='success')=>{
  _this.$message({
    message: msg,
    type: type
  })
}
