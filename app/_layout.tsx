import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import TodosProvider from "@/contexts/TodosProvider";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <TodosProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </TodosProvider>
    </GluestackUIProvider>
  );
}
