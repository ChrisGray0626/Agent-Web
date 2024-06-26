import { MOCK, TOOL_EXAMPLE } from "@/constant";

export const toolDetail = TOOL_EXAMPLE;
export const fetchRealData = async (task: string) => {
  const myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Host", "121.196.198.27:32580");
  myHeaders.append("Connection", "keep-alive");
  const raw = JSON.stringify({
    task,
  });
  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return await fetch(
    "http://121.196.198.27:32580/gis_agent_backend/simple/task_plan/",
    requestOptions,
  ).then((response) => response.text());
};
export const fetchData = (task: string) =>
  new Promise((resolve, _reject) => {
    setTimeout(
      () =>
        resolve(
          MOCK.replace(
            /"task":"Extract water body from Landsat-8 images/,
            '"task":"' + task,
          ),
        ),
      1000,
    );
  });
