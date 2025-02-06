import React from "react";
import { Button, ButtonIcon, ButtonText } from "../ui/button";
import { day, monthOrWeekdayName } from "@/utils/cDates";
import { CloseCircleIcon } from "../ui/icon";

type Props = {
  date: Date;
  display: "month" | "weekday";
  selected?: boolean;
  format?: "short" | "long" | "narrow";
  onPress?: () => void;
};

export default function DateButton({
  date,
  display,
  selected,
  format = "short",
  ...props
}: Props) {
  return (
    <>
      <Button
        className="flex flex-col h-fit py-4 px-6 gap-0 rounded-xl"
        variant={`${selected ? "solid" : "outline"}`}
        {...props}
      >
        {selected && (
          <ButtonIcon
            size="sm"
            as={CloseCircleIcon}
            className="absolute top-1 right-1"
          />
        )}
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
