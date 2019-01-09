import api from '../services/example';
export default {

  namespace: 'example',

  state: {},

  effects: {
    *getUser({ payload }, { call }) {
      const response = yield call(api.getUser);
      console.log(response.data);
    },
    *postUser({ payload }, { call }) {
      const response = yield call(api.postUser);
      console.log(response.data);
    },
    *putUser({ payload }, { call }) {
      const response = yield call(api.putUser);
      console.log(response.data);
    },
  },

  reducers: {
  },

};
