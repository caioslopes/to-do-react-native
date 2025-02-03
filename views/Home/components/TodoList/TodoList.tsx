import React from "react";
import TodoItem from "./components/TodoItem";
import { FlatList } from "react-native";
import useTodos from "@/hooks/useTodos";

export default function TodoList() {
  const { todos, removeTodo, handleDone } = useTodos();

  //const notDoneTodo = todos.filter((todo) => todo.doneAt === undefined);

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
