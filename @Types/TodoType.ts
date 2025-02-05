export type TodoType = {
  [index: string]: any;
  id: number;
  name: string;
  description: string;
  doAt: Date;
  completed: boolean;
};
