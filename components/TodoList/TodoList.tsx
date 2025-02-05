import React from "react";
import TodoItem from "./components/TodoItem";
import { FlatList } from "react-native";
import { TodoType } from "@/@Types/TodoType";

type Props = {
  todos: TodoType[];
  removeTodo: (id: number) => void;
  handleDone: (id: number) => void;
};

export default function TodoList({ todos, removeTodo, handleDone }: Props) {
  return (
    <>
      <FlatList
        data={todos}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TodoItem
            key={item.id}
            todo={item}
            removeTodo={removeTodo}
            handleDone={handleDone}
          />
        )}
      />
    </>
  );
}
