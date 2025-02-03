import DateButton from "@/components/DateButton/DateButton";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React from "react";

export default function DaysFromMonth() {
  const today = new Date();
  const monthName = today
    .toLocaleString("pt-BR", { month: "long" })
    .replace(".", "");

  const getDays = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };

  return (
    <>
      <Box>
        <Text>{monthName}</Text>
        <Box className="flex flex-row gap-2">
          {[...Array(getDays(today.getFullYear(), today.getMonth()))].map(
            (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              return <DateButton key={i} date={date} />;
            }
          )}
        </Box>
      </Box>
    </>
  );
}
