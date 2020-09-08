const request = {
  baseUrl: 'http://ukdion-loan-app.herokuapp.com/api/v1',
  init() {
    request.baseUrl = 'http://ukdion-loan-app.herokuapp.com/api/v1';
    axios.defaults.baseURL = 'http://ukdion-loan-app.herokuapp.com/api/v1';
  },
  getBaseUrl() {
    return request.baseUrl;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },
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
  //   error(msg) {
  //     return this.$toast.success(msg, {
  //       // override the global option
  //       position: 'top',
  //     });
  //   },
};
export {request};
