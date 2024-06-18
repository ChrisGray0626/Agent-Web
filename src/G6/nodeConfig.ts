import { ShapeOptions } from "@antv/g6";

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
        // x,
        // width,
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
        stroke: "#5B8FF9",
        cursor: "pointer",
      },
      name: "root-node-key-shape",
    });
    const text = group.addShape("text", {
      attrs: {
        text: cfg.label,
        fill: "#fff",
        fontSize: 12,
        // x: -width / 2,
        // y: -height / 2,
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
