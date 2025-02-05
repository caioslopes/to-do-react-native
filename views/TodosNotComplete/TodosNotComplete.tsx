import Header from "@/components/Header/Header";
import TodoList from "@/components/TodoList/TodoList";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import useTodos from "@/hooks/useTodos";
import React, { useState } from "react";

export default function TodosNotComplete() {
  const { getTodos, removeTodo, handleDone } = useTodos();
  const [filters, setFilters] = useState({
    completed: false,
  });

  return (
    <>
      <Header filters={filters} setFilters={setFilters} />
      <Box className="p-6 flex-1 rounded-tl-2xl rounded-tr-2xl bg-white">
        <Heading>Para fazer</Heading>
        <TodoList
          todos={getTodos(filters)}
          removeTodo={removeTodo}
          handleDone={handleDone}
        />
      </Box>
    </>
  );
}
