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
import { AddIcon, CheckCircleIcon, Icon } from "../ui/icon";
import TaskForm from "./components/TaskForm";
import { useRouter } from "expo-router";
import { Toast, ToastDescription, ToastTitle, useToast } from "../ui/toast";

export default function AddTask() {
  const toast = useToast();
  const router = useRouter();
  const { add } = useTodos();
  const [showDrawer, setShowDrawer] = useState(false);

  const openDrawer = () => {
    setShowDrawer(true);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const onSuccess = () => {
    closeDrawer();
    router.push("/(tabs)");
    showSuccessToast();
  };

  const showSuccessToast = () =>
    toast.show({
      placement: "top",
      render: ({ id }) => {
        const toastId = "toast-" + id;
        return (
          <Toast
            action="info"
            nativeID={toastId}
            className="px-5 py-3 gap-4 rounded-full shadow-soft-1 items-center flex-row top-safe"
          >
            <Icon as={CheckCircleIcon} size="xl" className="text-white" />
            <ToastTitle size="sm">Tarefa adicionada com sucesso!</ToastTitle>
          </Toast>
        );
      },
    });

  return (
    <>
      <Fab
        className="z-0 bottom-16"
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
            <TaskForm addTodo={add} successCallback={onSuccess} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
