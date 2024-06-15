import { EdgeConfig, ShapeOptions } from "@antv/g6";

export const indentedEdge: ShapeOptions = {
  afterDraw: (cfg?: EdgeConfig, group?) => {
    const keyShape = group?.get("children")[0];
    keyShape.attr({
      stroke: cfg?.targetNode?.getModel().color,
      lineWidth: 3,
    });
    group!.toBack();
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
