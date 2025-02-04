import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React, { Dispatch, SetStateAction } from "react";
import Days from "./components/Days";
import { FilterType } from "../../views/Home/Home";

type Props = {
  filters: FilterType;
  setFilters: Dispatch<SetStateAction<FilterType>>;
};

export default function Weekdays({ filters, setFilters }: Props) {
  const chooseDay = (date: Date) => {
    setFilters((prev) => ({ ...prev, doneAt: date }));
  };

  return (
    <>
      <Box>
        <Text className="font-bold" size="md">
          Semana
        </Text>
        <Days />
      </Box>
    </>
  );
}
