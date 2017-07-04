import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.baseURL = 'https://api.github.com'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // console.log('request:' + JSON.stringify(config))
    return config
  },
  err => {
    console.log('request err: ' + JSON.stringify(err))
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // console.log('response:' + JSON.stringify(response.data))
    return response
  },
  err => {
    console.log('response err: ' + JSON.stringify(err))
    return Promise.reject(err)
  })

export default axios
