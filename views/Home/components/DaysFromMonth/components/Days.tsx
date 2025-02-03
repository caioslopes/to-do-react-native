import DateButton from "@/components/DateButton/DateButton";
import React from "react";
import { FlatList } from "react-native";

export default function Days() {
  const today = new Date();
  const week: { id: number; date: Date }[] = [];

  for (let i = today.getDay() - 1; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    week.push({ id: i, date });
  }

  return (
    <>
      <FlatList
        horizontal
        data={week}
        keyExtractor={({ id }) => id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <>
            <DateButton date={item.date} />
          </>
        )}
      />
    </>
  );
}
