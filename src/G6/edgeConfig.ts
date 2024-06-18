import { ShapeOptions } from "@antv/g6";

export const indentedEdge: ShapeOptions = {
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
