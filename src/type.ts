export type Task = {
  task: string;
  toolId: string;
  toolName: string;
  subtasks: Task[];
};

// export type Tool = {
//   id: string;
//   name: string;
//   description: string;
//   args: {
//     name: string;
//     type: string;
//     description: string;
//   }[];
// };
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
