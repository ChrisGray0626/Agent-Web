/**
 * @Description: Axios Configuration
 * @Author: Chris
 * @Date: 2024/6/27
 */

import axios, {AxiosInstance} from "axios";

export interface AxiosInstanceConfig {
  baseURL: string;
  timeout?: number;
}
// 请求头设置
// instance.defaults.headers.post["Content-Type"] = "application/json";
// 拦截器设置
function setInterceptor(instance: AxiosInstance) {
  // 请求拦截器设置
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      // 对请求错误做些什么
      return Promise.reject(error);
    },
  );
// 响应拦截器设置
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
}

export function createAxiosInstance(config: AxiosInstanceConfig): AxiosInstance {
  const instance = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout,
  });
  // 设置统一拦截器
  setInterceptor(instance);

  return instance;
}