import { MOCK_JOB, MOCK_TOOL, TOOL_EXAMPLE } from "@/constant";

export const toolDetail = TOOL_EXAMPLE;

export const mockFetchJob = (task: string) =>
  new Promise((resolve, _reject) => {
    setTimeout(
      () =>
        resolve({
          data: JSON.parse(
            MOCK_JOB.replace(
              /"task":"Extract water body from Landsat-8 images/,
              '"task":"' + task,
            ),
          ),
        }),
      1000,
    );
  });

export const mockFetchTool = (_toolId: string) =>
  new Promise((resolve, _reject) => {
    setTimeout(() => resolve({ data: JSON.parse(MOCK_TOOL) }), 1000);
  });
