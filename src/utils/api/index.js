import axios from 'axios'
import Vue from 'vue'

/**
 * 后台接口函数
 * 
 * @param {string} url 接口的具体地址 - 必须
 * @param {obj} data 需要传到后台的文件 - 可选
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


/**
 * 确认是否删除
 */

 export function __del(port, data, fun) {
  this.$confirm(`确定删除这行数据吗？`, '提醒', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    this.$port(port, data).then(data => {
      if (data.msg) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        fun();
      }
    });
  }).catch(() => {});
 }

 /**
  * 置顶的操作的确认
  */

export function __hot(port, data, fun) {
  this.$port(port, data).then(e => {
    if (e.msg) {
      if (e.hot) {
        this.$message({
          type: 'success',
          message: '已置顶'
        });
      } else {
        this.$message({
          type: 'success',
          message: '已取消置顶'
        });
      }
      fun();
    }
  });
}