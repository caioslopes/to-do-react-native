import React, { Dispatch, SetStateAction } from "react";
import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import DateButton from "../DateButton/DateButton";
import Weekdays from "../Weekdays/Weekdays";
import { TodoType } from "@/@Types/TodoType";
import { today } from "@/utils/cDates";

type Props = {
  setFilters: Dispatch<SetStateAction<Partial<TodoType>>>;
};

export default function Header({ setFilters }: Props) {
  return (
    <Box className="p-6">
      <Box className=" flex flex-row items-center justify-between">
        <Heading>Lista de Afazeres</Heading>
        <DateButton date={today()} display="month" />
      </Box>

      <Weekdays setFilters={setFilters} />
    </Box>
  );
}
