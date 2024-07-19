/**
 * @Description: Mock API
 * @Author: Martsi
 * @Date: 2024/6/19
 */

import {MOCK_JOB, MOCK_TOOL} from "@/constant";

export const fetchJob = (task: string) =>
  new Promise<{ data: any }>((resolve, _reject) => {
    MOCK_JOB.data.task = task;
    setTimeout(
      () =>
        resolve({
          data: MOCK_JOB
        }),
      1000,
    );
  });

export const fetchTool = (_toolId: string) =>
  new Promise<{ data: any }>((resolve, _reject) => {
    setTimeout(
      () =>
        resolve({
          data: MOCK_TOOL,
        }),
      500,
    );
  });
