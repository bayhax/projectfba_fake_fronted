/**
 * article模块接口列表
 */

import base from './base' // 导入接口域名列表
import axios from '../http' // 导入http中创建的axios实例

const blog = {
  // 博客列表
  blog (id, params) {
    return axios.get(`${base.bd}/topic/${id}`, {
      params: params
    })
  }
}

export default blog
