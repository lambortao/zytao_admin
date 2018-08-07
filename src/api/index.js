import axios from 'axios'
import Vue from 'vue'

const port = ((url, data) => {
  return axios({
    url,
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
})

export function getThinkList(data) {
  console.log(Vue.urlHost);
  return port(`${Vue.urlHost}article/getArticleList`, data);
}