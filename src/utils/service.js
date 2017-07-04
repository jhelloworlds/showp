import axios from 'axios'

class Service {
  constructor() {
    const service = axios.create({
      baseURL: 'https://service.stage.rxredefined.com/'
    })
    const token = localStorage.getItem('token') || ''
    service.defaults.headers.common['Authorization'] = `Bearer ${token}`
    service.interceptors.response.use(this.handleSuccess, this.handleError)
    this.service = service
    this.handleError = this.handleError.bind(this)
  }

  handleSuccess(response) {
    return response
  }
  handleError = (error) => {
    switch (error.response.data.error) {
      case 'auth.permission':
        localStorage.removeItem('token')
        // this.redirectTo(document, '/login')
        break;
      default:
        console.error('error')
        break;
    }
    return Promise.reject(error)
  }
  redirectTo(document, path) {
    document.location = path
  }
  get(path) {
    return this.service.get(path)
  }
  post(path, payload) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    })
  }
  delete(path) {
    return this.service.delete(path)
  }
  put(path, payload) {
    return this.service.request({
      method: 'POST',
      url: path + '/update',
      responseType: 'json',
      data: payload
    })
  }
}

export default new Service()