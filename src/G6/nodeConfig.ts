import { ShapeOptions } from "@antv/g6";

import { textWrapping } from "@/utils/graphUtil.ts";
import { Task } from "@/type.ts";

/**
 * @Description: G6 Node Style
 * @Author: Chris
 * @Date: 2024/6/12
 */

const labelStyle = {
  itemPadding: 5,
};

export const treeNode: ShapeOptions = {
  options: {
    style: {
      fill: "#e8f7ff",
    },
  },
  draw(cfg, group) {
    const { itemPadding } = labelStyle;
    let width = 0;
    const height = 28;
    const x = 0;
    const y = -height / 2;
    const borderRadius = 4;

    const keyShape = group.addShape("rect", {
      attrs: {
        x,
        y,
        width,
        height,
        radius: borderRadius,
      },
      name: "name-shape",
    });

    group.addShape("text", {
      attrs: {
        text: cfg.label,
        y,
        textAlign: "left",
        textBaseline: "top",
        cursor: "pointer",
        fill: "#666",
      },
      name: "name-label-shape",
    });
    width = group.getBBox().width;

    group.addShape("path", {
      attrs: {
        path: [
          ["M", x, 0],
          ["L", width + itemPadding, 0],
        ],
        stroke: cfg.color,
        lineWidth: 3,
      },
      name: "node-path-shape",
    });

    return keyShape;
  },
};
export const rootNode: ShapeOptions = {
  draw(cfg, group) {
    const rootColor = "#576286";
    const width = 100;
    const height = 30;
    const keyShape = group.addShape("rect", {
      attrs: {
        x: -width / 2,
        y: -height / 2,
        width,
        height,
        fill: rootColor,
        radius: 2,
        stroke: "#5A77C1",
        cursor: "pointer",
      },
      name: "root-node-key-shape",
    });
    const text = group.addShape("text", {
      attrs: {
        text: cfg.label,
        fill: "#fff",
        fontSize: 12,
        textAlign: "center",
        textBaseline: "middle",
        cursor: "pointer",
      },
      name: "root-text-shape",
    });
    const textWidth = text.getBBox().width + 10;
    const textHeight = text.getBBox().height + 10;
    keyShape.attr({
      x: -textWidth / 2,
      y: -textHeight / 2,
      width: textWidth,
      height: textHeight,
    });
    return keyShape;
  },
  getAnchorPoints() {
    return [[0.5, 1]];
  },
};
export const breakdownNode: ShapeOptions = {
  setState(name, value, item) {
    const group = item?.getContainer();
    const rectShape = group?.get("children")[0];
    const textShape = group?.get("children")[1];
    if (name === "hover") {
      if (value) {
        rectShape.attr({
          fill: "green",
        });
        textShape.attr({
          fill: "green",
        });
      } else {
        rectShape.attr({
          fill: "#D7DCF1",
        });
        textShape.attr({
          fill: "#000",
        });
      }
    }
  },
  draw(cfg, group) {
    const r = 10;
    const keyShape = group.addShape("circle", {
      attrs: {
        // x: -r / 2,
        // y: -r / 2,
        r,
        stroke: "#5B8FF9",
        fill: "#D7DCF1",
        lineWidth: 2,
        cursor: "pointer",
      },
      name: "breakdown-node-key-shape",
    });
    group.addShape("text", {
      attrs: {
        text: textWrapping(cfg.label as string, 300),
        fill: "#000",
        fontSize: 12,
        x: 2 * r,
        // y: -r / 2,
        textAlign: "left",
        textBaseline: "middle",
        cursor: "pointer",
      },
      name: "breakdown-text-shape",
    });
    return keyShape;
  },
  getAnchorPoints() {
    return [
      [0.5, 1],
      [0, 0.5],
    ];
  },
};
export const workflowNode: ShapeOptions = {
  setState(name, value, item) {
    const group = item?.getContainer();
    const rectShape = group?.get("children")[0];
    const textShape = group?.get("children")[2];
    if (name === "hover") {
      if (value) {
        rectShape.attr({
          fill: "green",
        });
        textShape.attr({
          fill: "green",
        });
      } else {
        rectShape.attr({
          fill: "#D7DCF1",
        });
        textShape.attr({
          fill: "#000",
        });
      }
    }
  },
  draw(cfg, group) {
    const size = 24;
    const keyShape = group.addShape("rect", {
      attrs: {
        width: size,
        height: size,
        // x: -size / 2,
        // y: -size / 2,
        radius: 4,
        stroke: "#5A77C1",
        fill: "#D7DCF1",
        lineWidth: 2,
        cursor: "pointer",
      },
      name: "workflow-node-key-shape",
    });
    group.addShape("image", {
      attrs: {
        // x: -size / 2,
        // y: -size / 2,
        width: size,
        height: size,
        img: "https://i.imgur.com/O2p39SI.png",
        cursor: "pointer",
      },
      name: "workflow-node-img-shape",
    });
    group.addShape("text", {
      attrs: {
        text: (cfg.task as Task).tool.name,
        fill: "#000",
        x: size * 1.5,
        y: size / 2,
        fontSize: 12,
        textAlign: "left",
        textBaseline: "middle",
        cursor: "pointer",
      },
      name: "workflow-node-text-shape",
    });
    return keyShape;
  },
  getAnchorPoints() {
    return [
      [0.5, 0],
      [0.5, 1],
    ];
  },
};
