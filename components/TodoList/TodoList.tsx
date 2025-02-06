import React, { useRef } from "react";
import TodoItem from "./components/TodoItem";
import { FlatList } from "react-native";
import { TodoType } from "@/@Types/TodoType";
import { Toast, ToastTitle, useToast } from "../ui/toast";
import { Icon, CheckCircleIcon, ArrowLeftIcon, CheckIcon } from "../ui/icon";
import AlertConfirmRemove from "./components/AlertConfirmRemove";

type Props = {
  todos: TodoType[];
  remove: (id: number) => void;
  update: (index: number, element: Omit<TodoType, "id">) => void;
};

export default function TodoList({ todos, remove, update }: Props) {
  const toast = useToast();
  const taskRef = useRef<TodoType | undefined>(undefined);
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);

  const showTaskRemoved = () =>
    toast.show({
      placement: "top",
      render: ({ id }) => {
        const toastId = "toast-" + id;
        return (
          <Toast
            action="success"
            nativeID={toastId}
            className="px-5 py-3 gap-4 rounded-full shadow-soft-1 items-center flex-row top-safe"
          >
            <Icon as={CheckCircleIcon} size="xl" className="text-white" />
            <ToastTitle size="sm">Tarefa excluída com sucesso!</ToastTitle>
          </Toast>
        );
      },
    });

  const showTaskDone = () =>
    toast.show({
      placement: "top",
      render: ({ id }) => {
        const toastId = "toast-" + id;
        return (
          <Toast
            action="success"
            nativeID={toastId}
            className="px-5 py-3 gap-4 rounded-full shadow-soft-1 items-center flex-row top-safe"
          >
            <Icon size="sm" as={CheckIcon} className="text-white" />
            <ToastTitle size="sm">Tarefa concluída!</ToastTitle>
          </Toast>
        );
      },
    });

  const showTaskUndone = () =>
    toast.show({
      placement: "top",
      render: ({ id }) => {
        const toastId = "toast-" + id;
        return (
          <Toast
            action="warning"
            nativeID={toastId}
            className="px-5 py-3 gap-4 rounded-full shadow-soft-1 items-center flex-row top-safe"
          >
            <Icon as={ArrowLeftIcon} size="sm" className="text-white" />
            <ToastTitle size="sm">Tarefa desfeita</ToastTitle>
          </Toast>
        );
      },
    });

  const openAlertDialog = (task: TodoType) => {
    taskRef.current = task;
    setShowAlertDialog(true);
  };

  const handleClose = () => {
    setShowAlertDialog(false);
    taskRef.current = undefined;
  };

  return (
    <>
      <FlatList
        data={todos}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TodoItem
            key={item.id}
            todo={item}
            remove={remove}
            update={update}
            feedback={{
              taskDone: showTaskDone,
              taskUndone: showTaskUndone,
              removeTask: openAlertDialog,
            }}
          />
        )}
      />
      <AlertConfirmRemove
        taskRef={taskRef}
        showAlertDialog={showAlertDialog}
        handleClose={handleClose}
        remove={remove}
        feedback={{ taskRemoved: showTaskRemoved }}
      />
    </>
  );
}
