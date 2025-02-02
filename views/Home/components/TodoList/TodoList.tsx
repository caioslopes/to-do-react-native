import React from "react";
import TodoItem from "./components/TodoItem";
import { View } from "react-native";
import { TodoType } from "@/@Types/TodoType";

type Props = {
  todos: TodoType[];
};

export default function TodoList({ todos }: Props) {
  return (
    <>
      <View className="gap-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </View>
    </>
  );
}
