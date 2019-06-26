import qs from 'querystring'
// import config from '../../config'
// import vue from '../main'
export const request = (url: string, data: any): Promise<object> => {
  let xmlhttp: any;
  // if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
  //   xmlhttp = new XMLHttpRequest()
  // }
  // else {// code for IE6, IE5  
  //   xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
  // }
  xmlhttp = new XMLHttpRequest()
  let timeout = false;//是否超时
  let timer = setTimeout(function () {
    timeout = true;
    xmlhttp.abort();//请求中止
  }, 20000);
  // xmlhttp.responseType = "json"
  //http://localhost:7666
  xmlhttp.open('POST', 'http://localhost:7666' + '/api/ScreenMonitorService.ashx' + url, false)
  xmlhttp.onreadystatechange = function () {
    if (timeout) return;//忽略中止请求
    clearTimeout(timer);//取消等待的超时
  }
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
  xmlhttp.send(qs.stringify({ requestParams: JSON.stringify(data) }))

  return new Promise((resolve, reject) => {
    let res = JSON.parse(xmlhttp.response)
    if (res.result > 0) {
      resolve(res)
    } else {
      reject(res)
    }
  })
}

export function loginApi(code) {
  return request('?action=1', { code })
}
export function renderChart(code, action) {
  return request('?action=' + action, { code })
}
export function serviceBar() {

}