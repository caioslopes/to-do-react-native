import DateButton from "@/components/DateButton/DateButton";
import { Box } from "@/components/ui/box";
import { plusDay, today } from "@/utils/cdates";
import React from "react";
import { FlatList } from "react-native";

type Props = {
  chooseDate: (date: Date) => void;
};

export default function Days({ chooseDate }: Props) {
  const getWeek = () => {
    const week: { id: number; date: Date }[] = [];

    for (let i = 0; i < 7; i++) {
      let date = today();
      plusDay(date, i);
      week.push({ id: i, date });
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
              <DateButton
                date={item.date}
                display="weekday"
                onPress={() => chooseDate(item.date)}
              />
            </Box>
          </>
        )}
      />
    </>
  );
}
