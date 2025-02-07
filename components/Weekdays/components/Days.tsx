import DateButton from "@/components/DateButton/DateButton";
import { Box } from "@/components/ui/box";
import { plusDay, today } from "@/utils/cdates";
import React, { useRef } from "react";
import { FlatList } from "react-native";

type Props = {
  chooseDate: (date: Date) => void;
  clearDate: () => void;
};

export default function Days({ chooseDate, clearDate }: Props) {
  const buttonSelected = useRef<number>(-1);

  const handlePress = (date: Date, id: number) => {
    if (buttonSelected.current === id) {
      clearDate();
      buttonSelected.current = -1;
    } else {
      chooseDate(date);
      buttonSelected.current = id;
    }
  };

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
                onPress={() => handlePress(item.date, item.id)}
                selected={buttonSelected.current === item.id}
              />
            </Box>
          </>
        )}
      />
    </>
  );
}
