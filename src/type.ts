export class Task {
  name: string;
  tool: Tool;
  children: Task[];
  parameters: { [key: string]: any };

  constructor(
    task: string,
    toolId: string,
    toolName: string,
    parameters: { [key: string]: any },
  ) {
    this.name = task;
    this.tool = new Tool(toolId, toolName);
    this.children = [] as Task[];
    this.parameters = parameters;
    // this.mapParametersToToolArgs()
  }

  addChild(task: Task) {
    this.children.push(task);
  }
}

export class Tool {
  id: string;
  name: string;
  description: string;
  args: { name: string; type: string; description: string; value?: any }[];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.description = "";
    this.args = [];
  }
}

export class FileNode {
  name: string;
  type: string;
  children: FileNode[];

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
    this.children = [] as FileNode[];
  }
}

export interface Response<T> {
  code: string;
  message: string;
  data: T;
}

export interface ProcessResponse {
  OUTPUT: string;
}
