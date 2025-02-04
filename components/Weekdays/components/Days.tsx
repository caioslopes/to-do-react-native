import DateButton from "@/components/DateButton/DateButton";
import { Box } from "@/components/ui/box";
import React from "react";
import { FlatList } from "react-native";

export default function Days() {
  const today = new Date();

  const getWeek = () => {
    const week: { id: number; date: Date }[] = [];
    let j = 0;
    for (let i = today.getDay() - 1; i < 7; i++) {
      let date = new Date();
      date.setHours(date.getHours() - 3);
      date.setDate(date.getDate() + j);
      week.push({ id: j, date });
      j++;
    }
    return week;
  };

  return (
    <>
      <FlatList
        horizontal
        data={getWeek()}
        keyExtractor={({ id }) => id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <>
            <Box className="mr-3">
              <DateButton date={item.date} display="weekday" />
            </Box>
          </>
        )}
      />
    </>
  );
}
