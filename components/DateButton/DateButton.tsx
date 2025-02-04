import React from "react";
import { Button, ButtonText } from "../ui/button";
import getMonthOrWeekdayName from "@/utils/getMonthOrWeekdayName";
import { IButtonProps } from "@gluestack-ui/button/lib/types";

type Props = IButtonProps & {
  date: Date;
  display: "month" | "weekday";
  format?: "short" | "long" | "narrow";
};

export default function DateButton({ date, display, format, ...props }: Props) {
  return (
    <>
      <Button
        className="flex flex-col h-fit py-4 px-6 gap-0 rounded-xl"
        {...props}
      >
        <ButtonText size="md" className="font-extrabold">
          {date.getDate()}
        </ButtonText>
        <ButtonText size="sm">
          {getMonthOrWeekdayName(date, display, format)}
        </ButtonText>
      </Button>
    </>
  );
}
