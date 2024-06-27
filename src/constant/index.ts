export const BASE_URL = "http://121.196.198.27:32580/"

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
export const MOCK = `{"task":"Extract water body from Landsat-8 images","subtasks":[{"task":"Import Landsat-8 imagery into QGIS","toolId":"gdal:translate","subtasks":[],"toolName":""},{"task":"Assign projection to the imported raster if it does not already have one","toolId":"gdal:assignprojection","subtasks":[],"toolName":""},{"task":"Select an appropriate spectral band combination for water body extraction","toolId":"gdal:rearrange_bands","subtasks":[],"toolName":""},{"task":"Apply threshold to identify water bodies","toolId":"gdal:rastercalculator","subtasks":[],"toolName":""},{"task":"Convert the raster of threshold values to vector format for precise delineation","toolId":"gdal:polygonize","subtasks":[],"toolName":""},{"task":"Refine the resultant vector layer by removing small erroneous polygons","toolId":"native:deleteholes","subtasks":[],"toolName":""}],"toolId":"","toolName":""}`;
