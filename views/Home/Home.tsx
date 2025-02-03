import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import TodoList from "./components/TodoList/TodoList";
import AddTask from "@/components/AddTask/AddTask";
import { Box } from "@/components/ui/box";
import DateButton from "@/components/DateButton/DateButton";
import DaysFromMonth from "./components/DaysFromMonth/DaysFromMonth";

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-primary-100"
      >
        <Box className="p-6 flex flex-row items-center justify-between">
          <Text className="font-extrabold text-2xl text-white">
            Lista de Afazeres
          </Text>
          <DateButton date={new Date()} />
        </Box>
        <Box className="p-6">
          <DaysFromMonth />
        </Box>
        <Box className="p-6 min-h-screen rounded-tl-2xl rounded-tr-2xl bg-white">
          <Text>Todos</Text>
          <TodoList />
        </Box>
      </ScrollView>
      <AddTask />
    </SafeAreaView>
  );
}
