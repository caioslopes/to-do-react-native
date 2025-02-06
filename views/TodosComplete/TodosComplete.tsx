import { Box } from "@/components/ui/box";
import React from "react";
import TodoList from "@/components/TodoList/TodoList";
import useTodos from "@/hooks/useTodos";
import { Heading } from "@/components/ui/heading";
import { TodoType } from "@/@Types/TodoType";

export default function TodosComplete() {
  const { findAll, remove, update } = useTodos();

  return (
    <Box className="pl-6 pr-6 pt-6 flex-1 rounded-tl-2xl rounded-tr-2xl bg-white">
      <Heading className="mb-3">Já feitos</Heading>
      <TodoList
        todos={findAll({ completed: true } as Partial<TodoType>)}
        remove={remove}
        update={update}
      />
    </Box>
  );
}
