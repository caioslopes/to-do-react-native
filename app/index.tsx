import { TodoType } from "@/@Types/TodoType";
import TodosProvider from "@/contexts/TodosProvider";
import { todosStoraged } from "@/storage/todos";
import Home from "@/views/Home/Home";
import { useEffect, useState } from "react";

export default function Index() {
  return <Home />;
}
