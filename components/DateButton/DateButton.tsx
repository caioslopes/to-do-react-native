import { Box } from "@/components/ui/box";
import React from "react";
import { Button, ButtonText } from "../ui/button";

type Props = {
  date: Date;
};

export default function DateButton({ date }: Props) {
  const day = date.getDate();
  const monthName = date
    .toLocaleString("pt-BR", { month: "short" })
    .replace(".", "");
  return (
    <>
      <Box className="w-fit">
        <Button className="flex flex-col h-fit py-2 px-4 gap-0">
          <ButtonText size="md" className="font-extrabold">
            {day}
          </ButtonText>
          <ButtonText size="sm">{monthName}</ButtonText>
        </Button>
      </Box>
    </>
  );
}
