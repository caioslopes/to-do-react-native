import { View, TouchableOpacity } from "react-native";
import { CreateTodoType } from "@/@Types/TodoType";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
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
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { HStack } from "@/components/ui/hstack";
import { AddIcon, CalendarDaysIcon } from "@/components/ui/icon";

type Props = {
  addTodo: (todo: CreateTodoType) => void;
  successCallback?: () => void;
};

export default function TaskForm({ addTodo, successCallback }: Props) {
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
    if (successCallback) successCallback();
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
          <Textarea size="md" className="rounded-lg">
            <TextareaInput
              value={form.description}
              onChangeText={(description) =>
                setForm((prev) => ({ ...prev, description: description }))
              }
            />
          </Textarea>
          <FormControlError>
            <FormControlErrorText>
              O que precisa ser feito?
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Quando?</FormControlLabelText>
          </FormControlLabel>

          <HStack space="sm">
            <Button
              variant="outline"
              className="h-14 rounded-lg"
              onPress={() => setForm((prev) => ({ ...prev, doAt: new Date() }))}
            >
              <ButtonText>Amanhã</ButtonText>
            </Button>
            <Button
              variant="outline"
              className="h-14 rounded-lg flex-1"
              onPress={toggleDatePicker}
            >
              <ButtonIcon as={CalendarDaysIcon} />
              <ButtonText>{form.doAt.toLocaleDateString("pt-BR")}</ButtonText>
            </Button>
          </HStack>

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
          variant="solid"
          action="primary"
          className="h-14 rounded-lg"
          onPress={onSubmit}
        >
          <ButtonIcon as={AddIcon} />
          <ButtonText size="md">Adicionar tarefa</ButtonText>
        </Button>
      </View>
    </>
  );
}
