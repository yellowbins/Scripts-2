const cookieName = '百度贴吧'
const cookieKey = 'chavy_cookie_tieba'
const cookieVal = $request.headers['Cookie']

if (cookieVal.indexOf('BDUSS') > 0) {
  let cookie = $prefs.setValueForKey(cookieVal, cookieKey)
  if (cookie) {
    let msg = `Cookie [${cookieName}] 写入成功!`
    $notify(msg, '', '详见日志')
    console.log(msg)
    console.log(cookieVal)
  }
} else {
  let msg = `Cookie [${cookieName}] 获取失败!`
  let msgDetail = `请确保在已登录状态下获取Cookie`
  $notify(msg, '', msgDetail)
  console.log(`${msg}, ${msgDetail}`)
  console.log(cookieVal)
}

$done({})
