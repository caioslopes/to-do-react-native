import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer";
import useTodos from "@/hooks/useTodos";
import React, { useState } from "react";
import { Fab, FabIcon } from "../ui/fab";
import { Heading } from "../ui/heading";
import { AddIcon } from "../ui/icon";
import TaskForm from "./components/TaskForm";
import { useRouter } from "expo-router";

export default function AddTask() {
  const router = useRouter();
  const { add } = useTodos();
  const [showDrawer, setShowDrawer] = useState(false);

  const openDrawer = () => {
    setShowDrawer(true);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
    router.push("/(tabs)");
  };

  return (
    <>
      <Fab
        className="z-0 bottom-20"
        size="lg"
        placement="bottom right"
        onPress={openDrawer}
      >
        <FabIcon as={AddIcon} />
      </Fab>
      <Drawer
        isOpen={showDrawer}
        onClose={closeDrawer}
        size="md"
        anchor="bottom"
      >
        <DrawerBackdrop />
        <DrawerContent className="rounded-tl-2xl rounded-tr-2xl">
          <DrawerHeader>
            <Heading size="xl">Adicionar tarefa</Heading>
          </DrawerHeader>
          <DrawerBody>
            <TaskForm addTodo={add} successCallback={closeDrawer} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
