export class Task {
  name: string;
  tool: Tool;
  children: Task[];
  parameters: { [key: string]: any };

  constructor(task: string, toolId: string, toolName: string, parameters: { [key: string]: any }) {
    this.name = task;
    this.tool = new Tool(toolId, toolName);
    this.children = [] as Task[];
    this.parameters = parameters;
    // this.mapParametersToToolArgs()
  }

  addChild(task: Task) {
    this.children.push(task);
  }

  // 新增方法：将 parameters 添加到 tool.args 中
  mapParametersToToolArgs() {
    // 遍历 task.parameters 对象，将每个键值对放入 tool.args 中
    for (const key in this.parameters) {
      if (this.parameters.hasOwnProperty(key)) {
        const paramValue = this.parameters[key];

        // 找到与参数名匹配的 arg
        const arg = this.tool.args.find(arg => arg.name === key);

        // 如果找到匹配的 arg，则添加 value 属性
        if (arg) {
          arg.value = paramValue;
        }
      }
    }
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
