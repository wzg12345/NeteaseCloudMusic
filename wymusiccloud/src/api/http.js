// 导入axios
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到

// 进行一些全局配置
// 公共路由(网络请求地址)
axios.defaults.baseURL = '/api';
// 请求响应超时时间
axios.defaults.timeout = 5000;

// 封装自己的get/post方法
export default {
  get(url, params){
    return new Promise((resolve, reject) =>{
      axios.get(url, {
        params: params
      })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data)
        })
    });
  },
  post(url, params){
    return new Promise((resolve, reject) => {
      axios.post(url, QS.stringify(params))
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data)
        })
    });
  },

};
