import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React, { Dispatch, SetStateAction } from "react";
import Days from "./components/Days";
import { TodoType } from "@/@Types/TodoType";
import { Button, ButtonIcon, ButtonText } from "../ui/button";
import { SlashIcon } from "../ui/icon";

type Props = {
  setFilters: Dispatch<SetStateAction<Partial<TodoType>>>;
};

export default function Weekdays({ setFilters }: Props) {
  const chooseDate = (date: Date) => {
    setFilters((prev) => ({ ...prev, doAt: date }));
  };

  const clearDate = () => setFilters((prev) => ({ ...prev, doAt: undefined }));

  return (
    <>
      <Box>
        <Text className="font-bold" size="md">
          Semana
        </Text>
        <Days chooseDate={chooseDate} clearDate={clearDate} />
      </Box>
    </>
  );
}
