import React from "react";
import TodoItem from "./components/TodoItem";
import { FlatList } from "react-native";
import { TodoType } from "@/@Types/TodoType";

type Props = {
  todos: TodoType[];
  remove: (id: number) => void;
  update: (index: number, element: Omit<TodoType, "id">) => void;
};

export default function TodoList({ todos, remove, update }: Props) {
  return (
    <>
      <FlatList
        data={todos}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TodoItem key={item.id} todo={item} remove={remove} update={update} />
        )}
      />
    </>
  );
}
