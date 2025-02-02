import { CreateTodoType, TodoType } from "@/@Types/TodoType";
import TodosContext from "@/contexts/TodosContext";
import { storeTodos } from "@/storage/todos";
import { useContext } from "react";

type TodoHook = {
  todos: TodoType[];
  addTodo: (todo: CreateTodoType) => void;
};

export default function useTodos(): TodoHook {
  const INCREMENT = 3;
  const { todos, setTodos } = useContext(TodosContext);

  async function addTodo(todo: CreateTodoType) {
    console.log(todos);
    const newTodo: TodoType = { ...todo } as TodoType;
    let lastId: number = 1;

    if (todos.length > 0) {
      lastId = todos[todos.length - 1].id;
    }

    newTodo.id = lastId + INCREMENT;
    newTodo.createdAt = new Date();
    newTodo.updatedAt = new Date();

    setTodos([...todos, newTodo]);
    await storeTodos([...todos, newTodo]);
  }

  return {
    todos,
    addTodo,
  };
}
