import React, { useEffect, useState } from "react";
import TodosContext from "./TodosContext";
import { TodoType } from "@/@Types/TodoType";
import { domainParser } from "@/utils/domainParser";
import { TodoParser } from "@/parsers/TodoParser";
import { storeTodos } from "@/storage/asyncStorage";

type Props = {
  children: React.ReactNode;
};

export default function TodosProvider({ children }: Props) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          cache: "force-cache",
        }
      );
      const json = await response.json();

      return json.slice(0, 20);
    } catch (error) {
      console.error(error);
    }
  };

  const convertFetchedTodos = async () => {
    const fetchedTodos = await fetchTodos();

    const convertedTodos = fetchedTodos.map((todo: any) =>
      domainParser<any, TodoType, TodoParser>(todo, new TodoParser())
    );

    return convertedTodos;
  };

  const loadTodos = async () => {
    const convertedTodos = await convertFetchedTodos();
    storeTodos(convertedTodos);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
