import React, { useEffect, useState } from "react";
import TodosContext from "./TodosContext";
import { TodoType } from "@/@Types/TodoType";
import { todosStoraged } from "@/storage/todos";

type Props = {
  children: React.ReactNode;
};

export default function TodosProvider({ children }: Props) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  async function loadTodos() {
    const _todos = await todosStoraged();
    setTodos(_todos);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
