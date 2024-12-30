/**
 * @Description: Axios Configuration
 * @Author: Chris
 * @Date: 2024/6/27
 */

import axios, { AxiosInstance } from "axios";
import { ElNotification } from "element-plus";
import { SUCCESS_CODE } from "@/constant";

export interface AxiosInstanceConfig {
  baseURL: string;
  timeout?: number;
}
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
      // 检查接口调用状态
      if (response.data.code != SUCCESS_CODE) {
        // 弹出错误信息
        ElNotification({
          // title: "Error",
          message: response.data.message,
          duration: 2000,
        });
        console.error(response.data);
      }
      return response;
    },
    (error) => {
      // 弹出错误信息
      ElNotification.error({
        title: "Error",
        message: error,
        duration: 2000,
      });
      console.error(error);

      return Promise.reject(error);
    },
  );
}

export function createAxiosInstance(
  config: AxiosInstanceConfig,
): AxiosInstance {
  const instance = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout,
  });
  // 设置统一拦截器
  setInterceptor(instance);

  return instance;
}
