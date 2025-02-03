import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React from "react";
import Days from "./components/Days";

export default function DaysFromMonth() {
  return (
    <>
      <Box>
        <Text className="text-white font-bold" size="md">
          Semana atual
        </Text>
        <Days />
      </Box>
    </>
  );
}
