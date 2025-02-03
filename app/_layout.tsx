import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import TodosProvider from "@/contexts/TodosProvider";
import AddTask from "@/components/AddTask/AddTask";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <TodosProvider>
        <StatusBar translucent backgroundColor="transparent" />
        <Stack screenOptions={{ headerShown: false }} />
        <AddTask />
      </TodosProvider>
    </GluestackUIProvider>
  );
}
