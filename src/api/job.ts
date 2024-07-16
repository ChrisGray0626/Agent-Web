/**
 * @Description: Job API
 * @Author: Chris
 * @Date: 2024/7/1
 */
import { AxiosInstanceConfig, createAxiosInstance } from "@/api/axios.ts";

const BASE_URL = "http://47.237.25.20:32580/";

const axiosConfig: AxiosInstanceConfig = {
  baseURL: BASE_URL,
  timeout: 100000,
};

const axiosInstance = createAxiosInstance(axiosConfig);

/**
 * 获取 Job
 * @param data
 */
export function fetchJob(data: string) {
  return axiosInstance.post(
    "/gis_agent_backend/plan2level/task_plan/?modelName=gpt-4o",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}

/**
 * 根据 toolId 获取工具
 * @param toolId
 */
export function fetchTool(toolId: string) {
  return axiosInstance.get(
    "gis_agent_backend/test_tool/get_tool/?tool_id=" + toolId,
  );
}
