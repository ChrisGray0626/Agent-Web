/**
 * @Description: Mock API
 * @Author: Martsi
 * @Date: 2024/6/19
 */

import { MOCK_JOB, MOCK_TOOL } from "@/constant";

export const fetchJob = (task: string) =>
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
      500,
    );
  });

export const fetchTool = (_toolId: string) =>
  new Promise((resolve, _reject) => {
    setTimeout(
      () =>
        resolve({
          data: JSON.parse(
            MOCK_TOOL.replace(/Basic_statistics_for_fields/, _toolId).replace(
              /qgis:basicstatisticsforfields/,
              _toolId,
            ),
          ),
        }),
      500,
    );
  });
