import axios from "axios";
import * as queryString from "query-string";

export class AxiosWrapper {

  static get axios() {
    return axios;
  }

  static async get(path, data, config) {
    return axios.get(
      `${path}?${queryString.stringify(data || {})}`,
      config
    );
  }

  static async post(path, data, config) {
    return axios.post(`${path}`, data, config);
  }
}
