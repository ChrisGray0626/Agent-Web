/**
 * @Description: QGIS Process API
 * @Author: Chris
 * @Date: 2024/7/2
 */
import {AxiosInstanceConfig, createAxiosInstance} from "@/api/axios.ts";

const BASE_URL = "http://47.96.77.183:8000/";

const axiosConfig: AxiosInstanceConfig = {
  baseURL: BASE_URL,
}

const axiosInstance = createAxiosInstance(axiosConfig)

/**
 * 获取指定路径的目录
 * @param dir
 */
export function fetchDir(dir: string) {
  return axiosInstance.get("qgis/process/list_dir_with_structure/?dir=" + dir)
}

/**
 * 清空工作空间
 */
export function clearWorkspace() {
  return axiosInstance.delete("qgis/process/clear_qgis_temp_dir/")
}

/**
 * 上传多文件
 * @param files
 */
export function uploadFiles(files: File[]) {
  let formData = new FormData()
  formData.append("file_list", files)

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axiosInstance.post("qgis/process/upload_files/", formData, config)
}

// TODO download file
export function downloadFile() {
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
  }
  return axiosInstance.post("qgis/process/qgis_process", data)
}
