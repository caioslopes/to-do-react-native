import { TodoType } from "@/@Types/TodoType";
import { Badge, BadgeText, BadgeIcon } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
} from "@/components/ui/checkbox";
import { Heading } from "@/components/ui/heading";
import { CheckIcon, TrashIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { monthOrWeekdayName } from "@/utils/cDates";
import React from "react";

type Props = {
  todo: TodoType;
  remove: (id: number) => void;
  update: (index: number, element: Omit<TodoType, "id">) => void;
};

export default function TodoItem({ todo, remove, update }: Props) {
  const removeTodo = () => {
    remove(todo.id);
  };

  const handleDone = () => {
    update(todo.id, { ...todo, completed: !todo.completed });
  };

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
          <Box className="flex flex-row items-center gap-4">
            <Checkbox
              value="done"
              size="sm"
              isChecked={todo.completed}
              onPress={handleDone}
            >
              <CheckboxIndicator className="w-6 h-6 rounded-full">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
            </Checkbox>

            <Box>
              <Heading size="md" className="mb-1">
                {todo.name}
              </Heading>
              <Text size="sm">{todo.description}</Text>
              <Text size="sm">
                {todo.doAt.getDate()}{" "}
                {monthOrWeekdayName(todo.doAt, "weekday", "short")}
              </Text>
            </Box>
          </Box>

          <Button
            variant="outline"
            action="negative"
            onPress={removeTodo}
            className="h-full"
          >
            <ButtonIcon as={TrashIcon} />
          </Button>
        </Box>
      </Card>
    </>
  );
}
