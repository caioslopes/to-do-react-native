import React from "react";
import TodoItem from "./components/TodoItem";
import { View } from "react-native";
import useTodos from "@/hooks/useTodos";

export default function TodoList() {
  const { todos, removeTodo, handleDone } = useTodos();

  //const notDoneTodo = todos.filter((todo) => todo.doneAt === undefined);

  return (
    <>
      <View className="gap-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            handleDone={handleDone}
          />
        ))}
      </View>
    </>
  );
}
