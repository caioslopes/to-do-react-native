import { Box } from "@/components/ui/box";
import React from "react";
import { Button, ButtonText } from "../ui/button";

type Props = {
  date: Date;
};

export default function DateButton({ date }: Props) {
  const day = date.getDate();
  const monthName = date
    .toLocaleString("pt-BR", { weekday: "short" })
    .replace(".", "");
  return (
    <>
      <Box className="w-fit mr-3">
        <Button className="flex flex-col h-fit py-4 px-6 gap-0 rounded-xl">
          <ButtonText size="md" className="font-extrabold">
            {day}
          </ButtonText>
          <ButtonText size="sm">{monthName}</ButtonText>
        </Button>
      </Box>
    </>
  );
}
