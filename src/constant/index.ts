export const JOB_EXAMPLE = {
  task: "Calculation of Flood Affected Area",
  subtasks: [
    {
      task: "1-1 Calculating NDWI from remote sensing images before and after floods",
      subtasks: [],
      toolName: "Raster Calculator",
      toolId: "1",
    },
    {
      task: "Extract the part with NDWI value greater than 0 as the water body range",
      subtasks: [
        {
          task: "2-1 Calculating NDWI from remote sensing images before and after floods",
          subtasks: [],
          toolName: "Raster Calculator",
          toolId: "1",
        },
        {
          task: "2-2 Calculating NDWI from remote sensing images before and after floods",
          subtasks: [],
          toolName: "Raster Calculator",
          toolId: "1",
        },
      ],
      toolName: "Raster Calculator",
      toolId: "2",
    },
  ],
  toolId: "",
  toolName: "",
};

export const TOOL_EXAMPLE = {
  id: "1",
  name: "Raster Calculator",
  description: "Calculate the raster.",
  args: [
    {
      name: "input_1",
      type: "string",
      description: "description_1",
    },
    {
      name: "input_2",
      type: "string",
      description: "description_2",
    },
    {
      name: "output_3",
      type: "string",
      description: "description_3",
    },
  ],
};
export const MOCK_JOB = {
  "code": 70200,
  "message": "Success!",
  "data": {
    "task": "Extract elevation data of Sri Lanka from multiple TIF files using the shape of the island from a vector file",
    "subtasks": [
      {
        "task": "Merge multiple TIF files into a single raster dataset",
        "toolId": "gdal:merge",
        "subtasks": [],
        "toolName": "gdal:merge"
      },
      {
        "task": "Clip the merged raster dataset using the shape of the island from the vector file to extract the relevant elevation data",
        "toolId": "gdal:cliprasterbymasklayer",
        "subtasks": [],
        "toolName": "gdal:cliprasterbymasklayer"
      }
    ],
    "toolId": "",
    "toolName": ""
  }
};
export const MOCK_TOOL = {
  "code": 70200,
  "message": "success",
  "data": {
    "id": "gdal:cliprasterbymasklayer",
    "name": "Clip raster by mask layer",
    "description": "Clip raster by mask layer",
    "args": [{
      "name": "INPUT",
      "description": "Input raster file",
      "type": "raster",
      "required": true
    }, {"name": "MASK", "description": "Mask layer", "type": "vector", "required": true}, {
      "name": "OUTPUT",
      "description": "Output raster file",
      "type": "raster",
      "required": true
    }]
  }
};
