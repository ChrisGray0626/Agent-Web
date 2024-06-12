/**
 * @Description: G6 Graph Util
 * @Author: Chris
 * @Date: 2024/6/7
 */

export function treeJson2Graph(treeJson: any) {
    let graphData = {
        nodes: [],
        edges: [],
    };

    function buildGraph(nodeJson: any) {
        const id = generateId();
        const node = {
            id: id,
            label: nodeJson.label,
        };
        const children = nodeJson.children;
        if (children && children.length > 0) {
            children.forEach((child: any) => {
                const childNode = buildGraph(child);
                const edge = {
                    id: generateId(),
                    source: node.id,
                    target: childNode.id,
                };
                graphData.edges.push(edge);
                graphData.nodes.push(childNode);
            });
        }
        return node;
    }

    graphData.nodes.push(buildGraph(treeJson));
    console.log(graphData);
    return graphData;
}

function generateId(length: number = 6) {
    let result = "";
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}