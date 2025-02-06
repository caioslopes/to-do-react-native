import { TodoType } from "@/@Types/TodoType";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
} from "@/components/ui/checkbox";
import {
  CalendarDaysIcon,
  CheckIcon,
  Icon,
  TrashIcon,
} from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { monthOrWeekdayName } from "@/utils/cDates";
import React from "react";

type Props = {
  todo: TodoType;
  update: (index: number, element: Omit<TodoType, "id">) => void;
  feedback: {
    taskDone?: () => void;
    taskUndone?: () => void;
    removeTask: (todo: TodoType) => void;
  };
};

export default function TodoItem({ todo, update, feedback }: Props) {
  const removeTodo = () => {
    feedback.removeTask(todo);
  };

  const handleDone = () => {
    update(todo.id, { ...todo, completed: !todo.completed });

    if (todo.completed) {
      if (feedback?.taskDone) {
        feedback.taskDone();
      }
    } else {
      if (feedback?.taskUndone) {
        feedback.taskUndone();
      }
    }
  };

  return (
    <>
      <Card
        size="sm"
        variant="outline"
        className={`rounded-2xl mb-6 ${
          todo.completed ? "bg-secondary-100" : ""
        }`}
      >
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

            <Box className="w-72">
              <Text
                size="sm"
                className={`font-bold ${todo.completed ? "line-through" : ""}`}
              >
                {todo.title}
              </Text>
              <Box className="flex flex-row gap-1">
                <Icon as={CalendarDaysIcon} size="sm" color="#c4c4c4" />
                <Text size="sm">
                  {todo.doAt.getDate()}{" "}
                  {monthOrWeekdayName(todo.doAt, "weekday", "short")}
                </Text>
              </Box>
            </Box>
          </Box>

          <Button
            variant="link"
            action="negative"
            onPress={removeTodo}
            className="h-full p-4"
          >
            <ButtonIcon as={TrashIcon} />
          </Button>
        </Box>
      </Card>
    </>
  );
}
