import React from "react";
import { Text } from "react-native";
import TodoList from "./components/TodoList/TodoList";
import { Box } from "@/components/ui/box";
import DateButton from "@/components/DateButton/DateButton";
import DaysFromMonth from "./components/DaysFromMonth/DaysFromMonth";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="bg-primary-0 flex-1">
      <Box className="p-6 flex flex-row items-center justify-between">
        <Text className="font-extrabold text-2xl text-white">
          Lista de Afazeres
        </Text>
        <DateButton date={new Date()} />
      </Box>
      <Box className="p-6">
        <DaysFromMonth />
      </Box>
      <Box className="p-6 flex-1 rounded-tl-2xl rounded-tr-2xl bg-white">
        <Text>Todas as tarefas</Text>
        <TodoList />
      </Box>
    </SafeAreaView>
  );
}
