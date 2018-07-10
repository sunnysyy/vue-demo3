import axios from 'axios'
// import Qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.timeout = 12000
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某件事
  // if (config.method === 'post' && !config.isJson) {
  //   config.data = Qs.stringify(config.data);
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})

export default axios
