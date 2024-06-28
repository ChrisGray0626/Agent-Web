export class Task {
  name: string;
  tool: Tool;
  children: Task[];

  constructor(task: string, toolId: string, toolName: string) {
    this.name = task;
    this.initTool(toolId, toolName);
    this.children = [] as Task[];
  }

  initTool(toolId: string, toolName: string) {
    this.tool = new Tool(toolId, toolName);
  }

  addChild(task: Task) {
    this.children.push(task);
  }
}

export class Tool {
  id: string;
  name: string;
  description: string;
  args: {
    name: string;
    type: string;
    description: string;
  }[];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export type Node = {
  id: string;
  name: string;
  description: string;
  // props: Task;
  args: {
    name: string;
    description: string;
    required: boolean;
  }[];
};
