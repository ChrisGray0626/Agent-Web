import G6 from "@antv/g6";
import { Task } from "@/type.ts";

export const tooltip = new G6.Tooltip({
  offsetX: 10,
  offsetY: 20,
  getContent(e) {
    const outDiv = document.createElement("div");
    outDiv.style.width = "180px";
    outDiv.innerHTML = `
      <p>${(e?.item?.getModel().task as Task).name}</p>
    `;
    return outDiv;
  },
  itemTypes: ["node"],
});
