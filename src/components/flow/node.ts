import {h, RectNode, RectNodeModel} from "@logicflow/core"
import {getTextLengthByCanvas} from "./util.ts";

const NODE_TYPE_NAME = "beautify-node"

const DEFAULT_FILL = "#a6bbcf";

const DEFAULT_STROKE = "#999";
const DEFAULT_STROKE_WIDTH = 1;
const DEFAULT_SELECTED_STROKE = "#ff7f0e";
const DEFAULT_SELECTED_STROKE_WIDTH = 2;


// TODO 重写节点
class NodeModel extends RectNodeModel {
    /**
     * 初始化
     */
    initNodeData(data) {
        super.initNodeData(data)
        // 设置宽高
        this.width = 120;
        this.height = 40;
        // 设置弧度
        this.radius = 5;
        // 设置文字位置
        this.text.x = this.x + 10;
        this.text.y = this.y;
        // this.iconPosition = '';
    }

    // getData () {
    //     const data = super.getData()
    //     data.properties.ui = 'node-red'
    //     return data
    // }
    /**
     * 动态设置初始化数据
     */
    setAttributes() {
        // 根据 text 设置宽度
        if (this.text.value) {
            let width = 30 + getTextLengthByCanvas(this.text.value, 12).width;
            width = Math.ceil(width / 20) * 20;
            if (width < 100) {
                width = 100;
            }
            this.width = width;
        }
    }

    // updateText(val) {
    //     super.updateText(val)
    //     this.setAttributes();
    // }
    /**
     * 重写节点样式
     */
    getNodeStyle() {
        const style = super.getNodeStyle();
        const dataStyle = this.properties.style || {};
        // 设置选中&未选中时的样式
        if (this.isSelected) {
            style.stroke = dataStyle.borderColor || DEFAULT_SELECTED_STROKE;
            style.strokeWidth = Number(dataStyle.borderWidth) || DEFAULT_SELECTED_STROKE_WIDTH;
        } else {
            style.stroke = dataStyle.borderColor || DEFAULT_STROKE;
            style.strokeWidth = Number(dataStyle.borderWidth) || DEFAULT_STROKE_WIDTH;
        }
        style.fill = dataStyle.backgroundColor || DEFAULT_FILL;

        return style;
    }

    /**
     * 重写定义锚点
     */
    getDefaultAnchor() {
        const {x, y, id, width} = this;
        const anchors = [
            {
                x: x - width / 2,
                y: y,
                id: `${id}_left`,
                type: "left"
            },
            {
                x: x + width / 2,
                y: y,
                id: `${id}_right`,
                type: "right"
            },
        ];
        return anchors;
    }

    /**
     * 重写轮廓样式
     */
    getOutlineStyle() {
        const style = super.getOutlineStyle();
        // 设置轮廓的边框
        style.stroke = 'transparent';
        // 设置 hover 时轮廓的边框
        style.hover.stroke = 'transparent';

        return style;
    }
}

class Node extends RectNode {
    // getAnchorShape(anchorData) {
    //     const {x, y, type} = anchorData;
    //     return h("rect", {
    //         x: x - 5,
    //         y: y - 5,
    //         width: 10,
    //         height: 10,
    //         // className: 'custom-anchor'
    //     });
    // }

    getIcon() {
        const {
            width,
            height,
        } = this.props.model;
        return h('image', {
            width: 30,
            height: 40,
            x: -width / 2,
            y: -height / 2,
            href: "https://chrisgray.oss-cn-beijing.aliyuncs.com/Imageshack/文章.svg"
        })
    }

    getShape() {
        const {
            // text,
            x,
            y,
            width,
            height,
            radius
        } = this.props.model;
        const style = this.props.model.getNodeStyle()
        return h(
            'g',
            {
                className: 'lf-red-node'
            },
            [
                h('rect', {
                    ...style,
                    x: x - width / 2,
                    y: y - height / 2,
                    width,
                    height,
                    rx: radius,
                    ry: radius
                }),
                h('g', {
                    style: 'pointer-events: none;',
                    transform: `translate(${x}, ${y})`
                }, [
                    h('rect', {
                        x: -width / 2,
                        y: -height / 2,
                        width: 30,
                        height: 40,
                        fill: '#000',
                        fillOpacity: 0.05,
                        stroke: 'none',
                    }),
                    this.getIcon(),
                    h('path', {
                        d: `M ${30 - width / 2} ${1 - height / 2} l 0 38`,
                        stroke: '#000',
                        strokeOpacity: 0.1,
                        strokeWidth: 1
                    })
                ])
            ]
        )
    }
}


export default {
    type: NODE_TYPE_NAME,
    model: NodeModel,
    view: Node
}
