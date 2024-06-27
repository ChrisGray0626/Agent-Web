import axios from "axios";
import { BASE_URL } from "@/constant";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});
// 请求头设置
instance.defaults.headers.post["Content-Type"] = "application/json";
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

export default {
  get(url: string) {
    return instance.get(url);
  },
  post(url: string, data: any) {
    return instance.post(url, data);
  },
};
