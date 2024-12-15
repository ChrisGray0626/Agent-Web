/**
 * @Description: QGIS Process API
 * @Author: Chris
 * @Date: 2024/7/2
 */
import { AxiosInstanceConfig, createAxiosInstance } from "@/api/axios.ts";

const BASE_URL = "http://10.130.11.30:8000/";

const axiosConfig: AxiosInstanceConfig = {
  baseURL: BASE_URL,
};

const axiosInstance = createAxiosInstance(axiosConfig);

/**
 * 获取工作空间
 */
export function fetchWorkspace() {
  return axiosInstance.get("qgis/process/list_dir_with_structure/?dir=/");
}

/**
 * 清空工作空间
 */
export function clearWorkspace() {
  return axiosInstance.delete("qgis/process/clear_qgis_temp_dir/");
}

/**
 * 上传多文件
 * @param files
 */
export function uploadFiles(files: File[]) {
  let formData = new FormData();
  files.forEach((file) => {
    formData.append("file_list", file);
  });

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return axiosInstance.post("qgis/process/upload_files/", formData, config);
}

// TODO download file
export function downloadFile(fileName: string) {
  return axiosInstance.get("qgis/process/download_file/?filepath=" + fileName);
}

/**
 * 执行
 * @param toolId
 * @param inputs
 */
export function process(toolId: string, inputs: {}) {
  const data = {
    algorithm_id: toolId,
    parameter_dictionary: inputs,
  };
  return axiosInstance.post("qgis/process/qgis_process", data);
}
