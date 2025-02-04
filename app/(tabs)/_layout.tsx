import { CalendarDaysIcon, CheckIcon, Icon } from "@/components/ui/icon";
import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <SafeAreaView className="bg-primary-0 flex-1">
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "A fazer",
            tabBarIcon: ({ color }) => (
              <Icon as={CalendarDaysIcon} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="todos-complete"
          options={{
            title: "Completas",
            tabBarIcon: ({ color }) => <Icon as={CheckIcon} color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
