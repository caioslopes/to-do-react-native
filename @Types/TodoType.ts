interface IndexedType {
  [index: string]: any;
}

export type TodoType = IndexedType & {
  id: number;
  name: string;
  description: string;
  doAt: Date;
  doneAt?: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateTodoType = Omit<
  TodoType,
  "id" | "doneAt" | "createdAt" | "updatedAt"
>;

export type UpdateTodoType = Omit<TodoType, "id" | "createdAt" | "updatedAt">;
