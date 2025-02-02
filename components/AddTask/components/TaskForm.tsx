import { CreateTodoType } from "@/@Types/TodoType";
import { Button, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";

type Props = {
  addTodo: (todo: CreateTodoType) => void;
};

export default function TaskForm({ addTodo }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      doAt: "",
    },
  });

  function onSubmit(values: any) {
    addTodo(values);
  }

  return (
    <>
      <View className="gap-3">
        <FormControl isInvalid={errors.name ? true : false}>
          <FormControlLabel>
            <FormControlLabelText>Titulo</FormControlLabelText>
          </FormControlLabel>
          <Controller
            name="name"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input className="h-14 rounded-lg">
                <InputField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </Input>
            )}
          />
          <FormControlError>
            {/* <FormControlErrorIcon /> */}
            <FormControlErrorText>Qual o nome da tarefa?</FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl isInvalid={errors.description ? true : false}>
          <FormControlLabel>
            <FormControlLabelText>Descrição</FormControlLabelText>
          </FormControlLabel>
          <Controller
            name="description"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input className="h-14 rounded-lg">
                <InputField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </Input>
            )}
          />
          <FormControlError>
            {/* <FormControlErrorIcon /> */}
            <FormControlErrorText>
              O que precisa ser feito?
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl isInvalid={errors.doAt ? true : false}>
          <FormControlLabel>
            <FormControlLabelText>Quando</FormControlLabelText>
          </FormControlLabel>
          <Controller
            name="doAt"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input className="h-14 rounded-lg">
                <InputField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </Input>
            )}
          />
          <FormControlError>
            {/* <FormControlErrorIcon /> */}
            <FormControlErrorText>
              Para quando é esta tarefa?
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <Button
          size="xl"
          variant="solid"
          action="primary"
          className="rounded-xl"
          onPress={handleSubmit(onSubmit)}
        >
          <ButtonText size="md">Adicionar tarefa</ButtonText>
        </Button>
      </View>
    </>
  );
}
