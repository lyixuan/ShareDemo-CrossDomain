import request from '../utils/request';

export default {
  getUser() {
    return request('/api/users', {
      method: 'GET',
    });
  },
  postUser() {
    return request('/api/users', {
      method: 'POST',
    });
  },
  putUser() {
    return request('/api/users', {
      method: 'PUT',
    });
  }
}
