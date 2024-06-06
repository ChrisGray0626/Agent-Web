export const GRAPH_DATA_EXAMPLE = {
    nodes: [
        {
            id: "node_id_1_1",
            label: "节点1-1",
        },
        {
            id: "node_id_2_1",
            label: "节点2-1",
        },
        {
            id: "node_id_2_2",
            label: "节点2-2",
        },
        {
            id: "node_id_3_1",
            label: "节点3-1",
        },
        {
            id: "node_id_3_2",
            label: "节点3-2",
        },
        {
            id: "node_id_3_3",
            label: "节点3-3",
        },
        {
            id: "node_id_3_4",
            label: "节点3-4",
        },
    ],
    edges: [
        {
            source: "node_id_1_1",
            target: "node_id_2_1",
            sourceAnchor: 1,
        },
        {
            source: "node_id_1_1",
            target: "node_id_2_2",
        },
        {
            source: "node_id_2_2",
            target: "node_id_3_1",
        },
        {
            source: "node_id_2_2",
            target: "node_id_3_2",
        },
        {
            source: "node_id_2_2",
            target: "node_id_3_3",
        },
        {
            source: "node_id_2_2",
            target: "node_id_3_4",
        },
    ],
}