interface IndexedType {
  [index: string]: any;
}

export type TodoType = {
  id: number;
  name: string;
  description: string;
  doAt: Date;
  completed: boolean;
};

export type CreateTodoType = Omit<TodoType, "id" | "completed">;

export type UpdateTodoType = Omit<TodoType, "id">;
