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
