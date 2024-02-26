import axios from 'axios';

const api = {
    user: '/api/user',
    role: '/api/role',
    service: '/api/service',
    permission: '/api/permission',
    permissionNoPager: '/api/permission/no-pager',
  }
export default api
    
  // get
  export function getAction (url, parameter) {
    return axios({
      url: api.service,
      method: 'get',
      params: parameter,
    })
  }
  // post method= {post | put}
export function httpAction (url, parameter, method) {
    return axios({
      url: url,
      method: method,
      data: parameter,
    })
  }
  
  // put
  export function putAction (url, parameter) {
    return axios({
      url: url,
      method: 'put',
      data: parameter,
    })
  }
