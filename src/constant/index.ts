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
export const MOCK_JOB = `{"task":"Extract water body from Landsat-8 images","subtasks":[{"task":"Import Landsat-8 imagery into QGIS","toolId":"gdal:translate","subtasks":[],"toolName":"gdal:translate"},{"task":"Assign projection to the imported raster if it does not already have one","toolId":"gdal:assignprojection","subtasks":[],"toolName":"gdal:assignprojection"},{"task":"Select an appropriate spectral band combination for water body extraction","toolId":"gdal:rearrange_bands","subtasks":[],"toolName":"gdal:rearrange_bands"},{"task":"Apply threshold to identify water bodies","toolId":"gdal:rastercalculator","subtasks":[],"toolName":"gdal:rastercalculator"},{"task":"Convert the raster of threshold values to vector format for precise delineation","toolId":"gdal:polygonize","subtasks":[],"toolName":"gdal:polygonize"},{"task":"Refine the resultant vector layer by removing small erroneous polygons","toolId":"native:deleteholes","subtasks":[],"toolName":"native:deleteholes"}],"toolId":"","toolName":""}`;
export const MOCK_TOOL = `{"id":"qgis:basicstatisticsforfields","name":"Basic_statistics_for_fields","description":"Generates basic statistics for a field of the attribute table of a vector layer.","args":[{"name":"INPUT_LAYER","type":"[vector: any]","description":"Vector layer to calculate the statistics on.","required":true},{"name":"FIELD_NAME","type":"[tablefield: any]","description":"The name of the field that will be added to the input table.","required":true},{"name":"OUTPUT_HTML_FILE","type":"[html]","description":"Specification of the file for the calculated statistics. One of: Skip Output,Save to a Temporary File,Save to File.","required":false}]}`;
