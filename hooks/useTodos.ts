import { CreateTodoType, TodoType, UpdateTodoType } from "@/@Types/TodoType";
import TodosContext from "@/contexts/TodosContext";
import { storeTodos } from "@/storage/todos";
import { useContext } from "react";

type FilterType = {
  completed?: boolean;
  doAt?: Date;
};

type TodoHook = {
  getTodos: (filters?: FilterType) => TodoType[];
  addTodo: (todo: CreateTodoType) => void;
  removeTodo: (id: number) => void;
  handleDone: (id: number) => void;
};

export default function useTodos(): TodoHook {
  const INCREMENT = 3;
  const { todos, setTodos } = useContext(TodosContext);

  function getTodos(filters?: FilterType) {
    let data: TodoType[] = todos;

    if (filters?.completed !== undefined) {
      let completed = filters?.completed;
      data = todos.filter((todo) => todo.completed === completed);
    }

    if (filters?.doAt !== undefined) {
      let date = filters?.doAt;
      data = todos.filter((todo) => compareDates(date, todo.doAt));
    }

    return data;
  }

  function compareDates(date1: Date, date2: Date): boolean {
    let answer = false;

    if (date1.getDate() === date2.getDate()) {
      if (date1.getMonth() === date2.getMonth()) {
        if (date1.getFullYear() === date2.getFullYear()) {
          answer = true;
        }
      }
    }
    return answer;
  }

  async function addTodo(todo: CreateTodoType) {
    const updatedTodos = [...todos];
    const newTodo: TodoType = { ...todo } as TodoType;
    let lastId: number = 1;

    if (todos.length > 0) {
      lastId = updatedTodos[updatedTodos.length - 1].id;
    }

    newTodo.id = lastId + INCREMENT;
    newTodo.completed = false;

    updatedTodos.push(newTodo);

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

  async function handleDone(id: number) {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex((todo) => todo.id === id);
    const todo = updatedTodos[index];

    if (todo.completed) {
      todo.completed = false;
    } else {
      todo.completed = true;
    }

    setTodos(updatedTodos);
    await storeTodos(updatedTodos);
  }

  return {
    getTodos,
    addTodo,
    removeTodo,
    handleDone,
  };
}
