import { TodoType } from "@/@Types/TodoType";
import { Badge, BadgeText, BadgeIcon } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { Heading } from "@/components/ui/heading";
import { CheckIcon, StarIcon, TrashIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import getMonthOrWeekdayName from "@/utils/getMonthOrWeekdayName";
import React from "react";
import { View } from "react-native";

type Props = {
  todo: TodoType;
  removeTodo: (id: number) => void;
  handleDone: (id: number) => void;
};

export default function TodoItem({ todo, removeTodo, handleDone }: Props) {
  return (
    <>
      <Card size="sm" variant="outline" className="rounded-2xl mb-4">
        {/* <Box className="w-16">
          <Badge size="sm" variant="solid" action="success" className="gap-1">
            <BadgeText>Novo</BadgeText>
            <BadgeIcon as={StarIcon} />
          </Badge>
        </Box> */}
        <Box className="flex flex-row items-center justify-between">
          <Box>
            <Heading size="md" className="mb-1">
              {todo.name}
            </Heading>
            <Text size="sm">{todo.description}</Text>
            <Text size="sm">
              {todo.doAt.getDate()}{" "}
              {getMonthOrWeekdayName(todo.doAt, "month", "short")}
            </Text>
          </Box>

          <Box className="flex flex-row items-center gap-4">
            <Button
              variant="link"
              action="negative"
              onPress={() => removeTodo(todo.id)}
            >
              <ButtonIcon as={TrashIcon} />
            </Button>

            <Checkbox
              value="done"
              size="lg"
              isChecked={todo.completed}
              onPress={() => handleDone(todo.id)}
            >
              <CheckboxIndicator className="w-7 h-7 rounded-full">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
            </Checkbox>
          </Box>
        </Box>
      </Card>
    </>
  );
}
