import React from "react";
import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import DateButton from "../DateButton/DateButton";
import Weekdays from "../Weekdays/Weekdays";

type Props = {
  filters: any;
  setFilters: any;
};

export default function Header({ filters, setFilters }: Props) {
  return (
    <Box className="p-6">
      <Box className=" flex flex-row items-center justify-between">
        <Heading>Lista de Afazeres</Heading>
        <DateButton date={new Date()} display="month" />
      </Box>

      <Weekdays setFilters={setFilters} />
    </Box>
  );
}
