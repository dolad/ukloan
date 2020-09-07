import axios from 'axios';
const request = {
  baseUrl: 'http://ukdion-loan-app.herokuapp.com/api',
  init(baseURL) {
    request.baseUrl = baseURL;
    axios.defaults.baseURL = baseURL;
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 403) {
          console.log('unauthorized, logging out ...');
        }
        return Promise.reject(error.response);
      },
      // handle error
    );
  },
  getBaseUrl() {
    return request.baseUrl;
  },

  //   setHeader() {
  //   },

  get(resource) {
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  customRequest(data) {
    return axios(data);
  },
};

export {request};
