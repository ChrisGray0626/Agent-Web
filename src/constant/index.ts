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
export const MOCK_JOB = `{"code":70200,"message":"Success!","data":{"task":"Extract elevation data of Sri Lanka from multiple TIF files using the shape of the island from a vector file","subtasks":[{"task":"Merge multiple TIF files into a single raster dataset","toolId":"gdal:merge","subtasks":[],"toolName":"gdal:merge"},{"task":"Clip the merged raster dataset using the shape of the island from the vector file to extract the relevant elevation data","toolId":"gdal:cliprasterbymasklayer","subtasks":[],"toolName":"gdal:cliprasterbymasklayer"}],"toolId":"","toolName":""}}`;
export const MOCK_TOOL = `{"id":"qgis:randompointsinsidepolygons","name":"qgis:randompointsinsidepolygons","description":"Generates basic statistics for a field of the attribute table of a vector layer.","args":[{"name":"INPUT","type":"[vector: any]","description":"Vector layer to calculate the statistics on.","required":true},{"name":"POINTS_NUMBER","type":"[html]","description":"Specification of the file for the calculated statistics. One of: Skip Output,Save to a Temporary File,Save to File.","required":false},{"name":"MIN_DISTANCE","type":"[html]","description":"Specification of the file for the calculated statistics. One of: Skip Output,Save to a Temporary File,Save to File.","required":false},{"name":"OUTPUT","description":"xxxxxxx"}]}`;
