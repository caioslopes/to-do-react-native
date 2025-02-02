export type TodoType = {
  id: number;
  name: string;
  description: string;
  doAt: Date;
  doneAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateTodoType = Omit<
  TodoType,
  "id" | "doneAt" | "createdAt" | "updatedAt"
>;
