import React, { Dispatch, SetStateAction } from "react";
import { Box } from "../ui/box";
import Weekdays from "../Weekdays/Weekdays";
import { TodoType } from "@/@Types/TodoType";
import { day, monthOrWeekdayName, today } from "@/utils/cdates";
import { Image } from "react-native";
import { Text } from "../ui/text";
import { Heading } from "../ui/heading";

type Props = {
  setFilters: Dispatch<SetStateAction<Partial<TodoType>>>;
};

export default function Header({ setFilters }: Props) {
  return (
    <Box className="p-6">
      <Box className="flex flex-row items-center justify-between">
        <Image
          source={require("../../assets/images/icon.png")}
          style={{ width: 80, height: 80 }}
        />

        <Box>
          <Text size="sm">hoje é</Text>
          <Heading size="md">
            {day(today())} de {monthOrWeekdayName(today(), "month", "long")}
          </Heading>
          <Text size="sm">
            {monthOrWeekdayName(today(), "weekday", "long")}
          </Text>
        </Box>
      </Box>

      <Weekdays setFilters={setFilters} />
    </Box>
  );
}
