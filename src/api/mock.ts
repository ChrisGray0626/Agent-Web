/**
 * @Description: Mock API
 * @Author: Martsi
 * @Date: 2024/6/19
 */

import { MOCK_JOB, MOCK_TOOL } from "@/constant";

export const fetchJob = (task: string) =>
  new Promise<{ data: any }>((resolve, _reject) => {
    setTimeout(
      () =>
        resolve({
          data: JSON.parse(
            MOCK_JOB.replace(
              /"task":"Extract elevation data of Sri Lanka from multiple TIF files using the shape of the island from a vector file/,
              '"task":"' + task,
            ),
          ),
        }),
      1000,
    );
  });

export const fetchTool = (_toolId: string) =>
  new Promise<{ data: any }>((resolve, _reject) => {
    setTimeout(
      () =>
        resolve({
          data: JSON.parse(MOCK_TOOL),
        }),
      500,
    );
  });
