import { TodoType } from "@/@Types/TodoType";
import TodosContext from "@/contexts/TodosContext";
import { storeTodos } from "@/storage/asyncStorage";
import { compareDates } from "@/utils/cDates";
import { useContext } from "react";

type RepositoryFunctions = {
  add: (element: Omit<TodoType, "id" | "completed">) => void;
  remove: (index: number) => void;
  update: (index: number, element: Omit<TodoType, "id">) => void;
  findAll: (query?: Partial<TodoType>) => TodoType[];
};

export default function useTodos(): RepositoryFunctions {
  const { todos, setTodos } = useContext(TodosContext);
  const INCREMENT = 3;

  const add = (element: Omit<TodoType, "id" | "completed">) => {
    todos.push(_createTodo(element));
    setTodos([...todos]);
    storeTodos([...todos]);
  };

  const remove = (id: number) => {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index > -1) {
      todos.splice(index, 1);
      setTodos([...todos]);
      storeTodos([...todos]);
    }
  };

  const update = (id: number, element: Omit<TodoType, "id">) => {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index > -1) {
      let todo = todos[index];

      Object.keys(element).map((key: any) => {
        let current = element[key];
        if (current !== undefined) {
          todo[key] = current;
        }
      });

      setTodos([...todos]);
      storeTodos([...todos]);
    }
  };

  const findAll = (query?: Partial<TodoType>) => {
    let data = todos;
    if (query) {
      const { completed, doAt } = query;

      if (completed !== undefined) {
        data = data.filter((d) => d.completed === completed);
      }

      if (doAt) {
        data = data.filter((d) => compareDates(doAt, d.doAt));
      }
    }
    return data.sort((a, b) => b.id - a.id);
  };

  const _createTodo = (element: Omit<TodoType, "id" | "completed">) => {
    let id = 1;
    const newTodo = {} as TodoType;

    if (todos.length > 0) {
      id = todos[todos.length - 1].id + INCREMENT;
    }

    newTodo.id = id;
    newTodo.title = element.title;
    newTodo.completed = false;
    newTodo.doAt = element.doAt;

    return newTodo;
  };

  return { add, remove, update, findAll };
}
