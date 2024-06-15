import { ShapeDefine, ShapeOptions } from "@antv/g6";
import { fittingString } from "./graphUtil";

/**
 * @Description: G6 Node Style
 * @Author: Chris
 * @Date: 2024/6/12
 */

const labelStyle = {
  itemPadding: 5,
};

export const jsxNode: ShapeDefine = (cfg) => `
  <group>
    <rect style={{ width: 150, height: 20, fill: #2196F3, radius: [6, 6, 0, 0] }}>
      <text style={{ marginTop: 2, marginLeft: 75, textAlign: 'center', fontWeight: 'bold', fill: '#fff' }}>${cfg.id}</text>
    </rect>
    <rect style={{ width: 150, height: 55, stroke: #2196F3, fill: #ffffff, radius: [0, 0, 6, 6] }}>
      <text style={{ marginTop: 2, marginLeft: 2, fontSize: 10, fill: '#333' }}>描述: ${cfg.label}</text>
    </rect>
  </group>
`;
export const cardNode: ShapeOptions = {
  options: {
    anchorPoints: [
      [0.5, 0],
      [0.5, 1],
    ],
  },
  draw(cfg, group) {
    const keyShape = group.addShape("rect", {
      attrs: {
        width: 150,
        height: 100,
        radius: 5,
        fill: "#c1cbd7",
        shadowColor: "#656565",
        shadowOffsetX: 5,
        shadowOffsetY: 5,
        shadowBlur: 15,
      },
      name: "card-rect",
      draggable: true,
    });
    group.addShape("text", {
      attrs: {
        text: fittingString("ID: " + cfg.id, 140, 12),
        x: 10,
        y: 40,
        textAlign: "left",
        fill: "#5A4E52",
        shadowOffsetX: 1,
        shadowOffsetY: 1,
      },
      name: "card-id",
    });
    group.addShape("text", {
      attrs: {
        text: fittingString("Label: " + cfg.label, 140, 12),
        textAlign: "left",
        x: 10,
        y: 70,
        fill: "#0A0000",
        shadowOffsetX: 1,
        shadowOffsetY: 1,
      },
      name: "card-label",
    });

    return keyShape;
  },
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
        // fontFamily: "PingFangSC-Regular",
        fill: "#666",
      },
      name: "name-label-shape",
    });
    const textWidth = group.getBBox().width;
    width = textWidth;

    group.addShape("path", {
      attrs: {
        path: [
          ["M", x, 0],
          ["L", width + itemPadding, 0],
        ],
        stroke: cfg.color,
        lineWidth: 2,
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
