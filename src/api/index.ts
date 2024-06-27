import axios from "@/api/axios.ts";

export default {
    /**
     * 获取 Job
     * @param data
     */
    fetchJob(data: any) {
        return axios.post("gis_agent_backend/simple/task_plan/", data)
    },

    /**
     * 根据 toolId 获取工具
     * @param toolId
     */
    fetchTool(toolId: string) {
        return axios.get("gis_agent_backend/test_tool/get_tool/?tool_id=" + toolId)
    }
}