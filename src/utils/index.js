import axios from 'axios'
import Vue from 'vue'

/**
 * 后台接口函数
 * 
 * @param {string} url 接口的具体地址 
 * @param {obj} data 需要传到后台的文件
 */
export function __port(url, data) {
  return axios({
    url: `${Vue.urlHost}${url}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    data: JSON.stringify(data)
  }).then(res => {
    if (res.status === 200) {
      return res.data;
    } else {
      console.log(res);
    }
  })
}