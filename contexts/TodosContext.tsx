import { TodoType } from "@/@Types/TodoType";
import { createContext, Dispatch, SetStateAction } from "react";

type TodosContextType = {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
};

const TodosContext = createContext<TodosContextType>({} as TodosContextType);

export default TodosContext;
