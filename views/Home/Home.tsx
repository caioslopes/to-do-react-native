import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import TodoList from "./components/TodoList/TodoList";
import AddTask from "@/components/AddTask/AddTask";
import useTodos from "@/hooks/useTodos";

export default function Home() {
  const { todos, addTodo } = useTodos();

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} className="bg-primary-0">
        <View className="p-6">
          <Text className="font-extrabold text-2xl">Afazeres</Text>
        </View>
        <View className="p-6 min-h-screen rounded-tl-2xl rounded-tr-2xl bg-white">
          <Text>Todos</Text>
          <TodoList todos={todos} />
        </View>
      </ScrollView>
      <AddTask addTodo={addTodo} />
    </SafeAreaView>
  );
}
