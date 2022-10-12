"use strict";

import Vue from 'vue';
import axios from "axios";
import router from "@/router";

// Full config:  https://github.com/axios/axios#request-config
 //axios.defaults.baseURL = 'http://127.0.0.1:8000/';
 //axios.defaults.baseURL = 'https://test.icsc.gov.iq/backend/public';
  axios.defaults.baseURL = '/backend/public';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem("token");
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    console.log(error.response.status)
    return Promise.reject(error);

  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data

    return response;
  },
  function(error) {
    if(error.response.status ==401)
    {
      router.push('/dashboard/login');
      this.state.dash.login = false;


    }
    // Do something with response error

    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
