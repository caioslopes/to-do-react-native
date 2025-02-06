import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
} from "@/components/ui/alert-dialog";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { CircleIcon, CloseCircleIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import React from "react";

type Props = {
  taskRef: any;
  showAlertDialog: boolean;
  handleClose: () => void;
  remove: (id: number) => void;
  feedback: {
    taskRemoved: () => void;
  };
};

export default function AlertConfirmRemove({
  taskRef,
  remove,
  showAlertDialog,
  handleClose,
  feedback,
}: Props) {
  const onConfirm = () => {
    remove(taskRef.current.id);
    handleClose();
    feedback.taskRemoved();
  };

  return (
    <>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
        <AlertDialogBackdrop />
        <AlertDialogContent className="rounded-xl">
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              Você tem certeza que deseja remover está tarefa?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text size="sm">
              Remover está tarefa irá exclui-la permanentemente, está ação não
              poderá ser desfeita. Por favor confirme se você deseja prosseguir.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              className="rounded-lg"
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="sm"
            >
              <ButtonIcon as={CircleIcon} />
              <ButtonText>Manter tarefa</ButtonText>
            </Button>
            <Button
              className="rounded-lg"
              action="negative"
              size="sm"
              onPress={onConfirm}
            >
              <ButtonIcon as={CloseCircleIcon} />
              <ButtonText>Remover tarefa</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
