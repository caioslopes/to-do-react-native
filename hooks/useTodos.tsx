import { CreateTodoType, TodoType, UpdateTodoType } from "@/@Types/TodoType";
import TodosContext from "@/contexts/TodosContext";
import { storeTodos } from "@/storage/todos";
import { useContext } from "react";

type TodoHook = {
  todos: TodoType[];
  addTodo: (todo: CreateTodoType) => void;
  removeTodo: (id: number) => void;
  handleDone: (id: number) => void;
};

export default function useTodos(): TodoHook {
  const INCREMENT = 3;
  const { todos, setTodos } = useContext(TodosContext);

  async function addTodo(todo: CreateTodoType) {
    const updatedTodos = [...todos];
    const newTodo: TodoType = { ...todo } as TodoType;
    let lastId: number = 1;

    if (todos.length > 0) {
      lastId = updatedTodos[updatedTodos.length - 1].id;
    }

    newTodo.id = lastId + INCREMENT;
    newTodo.createdAt = new Date();
    newTodo.updatedAt = new Date();

    updatedTodos.push(newTodo);

    setTodos(updatedTodos);
    await storeTodos(updatedTodos);
  }

  async function updateTodo(id: number, updateTodo: UpdateTodoType) {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex((todo) => todo.id === id);
    const todo = updatedTodos[index];

    Object.keys(updateTodo).map((key) => {
      todo[key] = updateTodo[key];
    });

    todo.updatedAt = new Date();

    setTodos(updatedTodos);
    await storeTodos(updatedTodos);
  }

  async function removeTodo(id: number) {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
      await storeTodos(updatedTodos);
    }
  }

  /* Refactor this */
  async function handleDone(id: number) {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex((todo) => todo.id === id);
    const todo = updatedTodos[index];

    if (todo.doneAt !== undefined) {
      todo.doneAt = undefined;
    } else {
      todo.doneAt = new Date();
    }

    setTodos(updatedTodos);
    await storeTodos(updatedTodos);
  }

  return {
    todos,
    addTodo,
    removeTodo,
    handleDone,
  };
}
