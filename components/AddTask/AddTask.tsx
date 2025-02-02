import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@/components/ui/drawer";
import React from "react";
import { Heading } from "../ui/heading";
import { Fab, FabIcon } from "../ui/fab";
import { AddIcon } from "../ui/icon";
import TaskForm from "./components/TaskForm";
import { CreateTodoType } from "@/@Types/TodoType";

type Props = {
  addTodo: (todo: CreateTodoType) => void;
};

export default function AddTask({ addTodo }: Props) {
  const [showDrawer, setShowDrawer] = React.useState(false);
  return (
    <>
      <Fab
        className="z-0"
        size="lg"
        placement="bottom right"
        onPress={() => {
          setShowDrawer(true);
        }}
      >
        <FabIcon as={AddIcon} />
      </Fab>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
        size="md"
        anchor="bottom"
      >
        <DrawerBackdrop />
        <DrawerContent className="rounded-tl-2xl rounded-tr-2xl">
          <DrawerHeader>
            <Heading size="xl">Adicionar tarefa</Heading>
          </DrawerHeader>
          <DrawerBody>
            <TaskForm addTodo={addTodo} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
