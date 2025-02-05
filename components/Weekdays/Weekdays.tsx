import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React, { Dispatch, SetStateAction } from "react";
import Days from "./components/Days";
import { FilterType } from "@/@Types/FilterType";

type Props = {
  setFilters: Dispatch<SetStateAction<FilterType>>;
};

export default function Weekdays({ setFilters }: Props) {
  const chooseDate = (date: Date) => {
    setFilters((prev) => ({ ...prev, doAt: date }));
  };

  return (
    <>
      <Box>
        <Text className="font-bold" size="md">
          Semana
        </Text>
        <Days chooseDate={chooseDate} />
      </Box>
    </>
  );
}
