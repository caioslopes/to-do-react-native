import { View, TouchableOpacity } from "react-native";
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
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props = {
  addTodo: (todo: CreateTodoType) => void;
};

export default function TaskForm({ addTodo }: Props) {
  const [form, setForm] = useState<CreateTodoType>({
    name: "",
    description: "",
    doAt: new Date(),
  } as CreateTodoType);
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChangeDatePicker = ({ type }: any, selectedDate: any) => {
    if (type === "set") {
      const currentDate: any = selectedDate;
      setForm((prev) => ({ ...prev, doAt: currentDate }));
      toggleDatePicker();
    } else {
      toggleDatePicker();
    }
  };

  function onSubmit() {
    addTodo(form);
  }

  return (
    <>
      <View className="gap-3">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Titulo</FormControlLabelText>
          </FormControlLabel>
          <Input className="h-14 rounded-lg">
            <InputField
              value={form.name}
              onChangeText={(name) =>
                setForm((prev) => ({ ...prev, name: name }))
              }
            />
          </Input>
          <FormControlError>
            <FormControlErrorText>Qual o nome da tarefa?</FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Descrição</FormControlLabelText>
          </FormControlLabel>
          <Input className="h-14 rounded-lg">
            <InputField
              value={form.description}
              onChangeText={(description) =>
                setForm((prev) => ({ ...prev, description: description }))
              }
            />
          </Input>
          <FormControlError>
            <FormControlErrorText>
              O que precisa ser feito?
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Quando</FormControlLabelText>
          </FormControlLabel>
          <Input className="h-14 rounded-lg">
            <TouchableOpacity className="w-full" onPress={toggleDatePicker}>
              <InputField
                editable={false}
                value={form.doAt.toLocaleDateString("pt-BR")}
              />
            </TouchableOpacity>
          </Input>
          {showPicker && (
            <DateTimePicker
              testID="dateTimePicker"
              mode="date"
              display="spinner"
              value={form.doAt}
              onChange={onChangeDatePicker}
            />
          )}
          <FormControlError>
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
          onPress={onSubmit}
        >
          <ButtonText size="md">Adicionar tarefa</ButtonText>
        </Button>
      </View>
    </>
  );
}
