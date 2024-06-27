import G6, { ShapeOptions } from "@antv/g6";

export const indentedEdge: ShapeOptions = {
  afterDraw(_cfg, group) {
    const shape = group?.get("children")[0];
    shape.attr("stroke", "#656565");
    shape.attr("radius", "16");
    shape.attr("lineWidth", "2");
  },
  getControlPoints: (cfg) => {
    const startPoint = cfg.startPoint;
    const endPoint = cfg.endPoint;
    return [
      startPoint!,
      {
        x: startPoint!.x,
        y: endPoint!.y,
      },
      endPoint!,
    ];
  },
};
export const workflowEdge: ShapeOptions = {
  draw(cfg, group) {
    const { startPoint, endPoint } = cfg;
    const r = 3;
    const lineWidth = 2;
    const keyShape = group.addShape("path", {
      attrs: {
        path: [
          ["M", startPoint!.x, startPoint!.y + (r + lineWidth / 2)],
          ["L", endPoint!.x, endPoint!.y + (r + lineWidth / 2)],
        ],
        // radius: 10,
        stroke: "#5A77C1",
        lineWidth,
        endArrow: {
          path: G6.Arrow.circle(r), // 使用内置箭头路径函数，参数为箭头的 宽度、长度、偏移量（默认为 0，与 d 对应）
          // d: 25,
          fill: "#5A77C1",
        },
      },
      name: "workflow-edge-path-shape",
    });
    group.toFront();
    return keyShape;
  },
};
