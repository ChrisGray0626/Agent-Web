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
};

export const BREAKDOWN_JSON_EXAMPLE = {
  label: "Calculation of Flood Affected Area",
  required_data: "Remote sensing images before and after regional floods",
  children: [
    {
      label:
        "Calculating NDWI from remote sensing images before and after floods",
      Toolset: "Raster Analysis",
      tool: "Raster Calculator",
    },
    {
      label:
        "Extract the part with NDWI value greater than 0 as the water body range",
      Toolset: "Raster Analysis",
      tool: "Raster Calculator",
    },
    {
      label: "Convert the extracted raster water body into a vector",
      Toolset: "GDAL - Raster Conversion",
      tool: "Polygonize (Raster to Vector)",
    },
    {
      label:
        "Subtracting the vectors of the front and back water bodies to obtain the flood area",
      Toolset: "Vector Analysis",
      tool: "Difference",
    },
    {
      label: "Calculate the area of the flood-affected region",
      Toolset: "Vector Analysis",
      tool: "Calculate Geometry Attributes",
    },
  ],
};

export const BREAKDOWN_JSON_EXAMPLE_1 = {
  id: "sub1",
  label: "sub1test1212123",
  color: "#5B8FF9",
  type: "rootNode",
  children: [
    {
      id: "subTree1",
      label: "subTree1",
      color: "#F6BD16",
      children: [
        {
          id: "subTree1-1",
          label: "subTree1-1",
          color: "#5AD8A6",
          children: [
            {
              id: "subTree1-1-1",
              label: 'id: "subTree1-1-1"',
              color: "#5AD8A6",
            },
            {
              id: "subTree1-1-2",
              label: "subTree1-1-2",
              color: "#5AD8A6",
            },
          ],
        },
        {
          id: "subTree1-2",
          label: "subTree1-2",
          color: "#945FB9",
        },
      ],
    },
    {
      id: "subTree2",
      label: "subTree2",
      color: "#5D7092",
    },
  ],
};
