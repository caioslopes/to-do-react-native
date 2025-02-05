import React from "react";
import { Button, ButtonText } from "../ui/button";
import { IButtonProps } from "@gluestack-ui/button/lib/types";
import { day, monthOrWeekdayName } from "@/utils/cdates";

type Props = IButtonProps & {
  date: Date;
  display: "month" | "weekday";
  format?: "short" | "long" | "narrow";
};

export default function DateButton({
  date,
  display,
  format = "short",
  ...props
}: Props) {
  return (
    <>
      <Button
        className="flex flex-col h-fit py-4 px-6 gap-0 rounded-xl"
        {...props}
      >
        <ButtonText size="md" className="font-extrabold">
          {day(date)}
        </ButtonText>
        <ButtonText size="sm">
          {monthOrWeekdayName(date, display, format)}
        </ButtonText>
      </Button>
    </>
  );
}
