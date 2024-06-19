import G6, { TreeGraphData } from "@antv/g6";

export const getNodeLabelFitting = function (data: TreeGraphData) {
  const { id, label, children, toolId, toolName } = data;
  const newData: TreeGraphData = {
    id,
    label: fittingString(label!, 200, 10),
    toolId,
    toolName,
    children: [],
  };

  function fittingString(str: string, maxWidth: number, fontSize: number) {
    const ellipsis = "...";
    const ellipsisLength = G6.Util.getTextSize(ellipsis, fontSize)[0];
    let currentWidth = 0;
    let res = str;
    let spaceIndex = 0;
    const pattern = new RegExp("[\u4E00-\u9FA5]+"); // distinguish the Chinese characters and letters
    str.split("").forEach((letter, i) => {
      if (currentWidth > maxWidth - ellipsisLength) return;
      if (pattern.test(letter)) {
        // Chinese characters
        currentWidth += fontSize;
      } else {
        if (letter == " ") spaceIndex = i;
        // get the width of single letter according to the fontSize
        currentWidth += G6.Util.getLetterWidth(letter, fontSize);
      }
      if (currentWidth > maxWidth - ellipsisLength) {
        res = `${str.slice(0, spaceIndex ? spaceIndex : i)}${ellipsis}`;
      }
    });
    return res;
  }

  if (children && children.length >= 1) {
    for (let i = 0; i < children.length; i++) {
      newData.children![i] = getNodeLabelFitting(children[i]);
    }
  }
  return newData;
};
