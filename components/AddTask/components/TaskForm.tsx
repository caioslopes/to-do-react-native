import { View } from "react-native";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import React, { useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { HStack } from "@/components/ui/hstack";
import { AddIcon, CalendarDaysIcon } from "@/components/ui/icon";
import { TodoType } from "@/@Types/TodoType";
import { plusDay, today } from "@/utils/cDates";
import { Input, InputField } from "@/components/ui/input";

type Props = {
  addTodo: (todo: Omit<TodoType, "id" | "completed">) => void;
  successCallback?: () => void;
};

export default function TaskForm({ addTodo, successCallback }: Props) {
  const [form, setForm] = useState<Omit<TodoType, "id" | "completed">>({
    title: "",
    doAt: today(),
  } as Omit<TodoType, "id" | "completed">);
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChangeDatePicker = (event: DateTimePickerEvent, date?: Date) => {
    if (event.type === "set") {
      if (date) {
        setForm((prev) => ({ ...prev, doAt: date }));
      }
    }
    toggleDatePicker();
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
            <FormControlLabelText>
              O que precisa ser feito?
            </FormControlLabelText>
          </FormControlLabel>
          <Input className="h-14 rounded-lg">
            <InputField
              value={form.title}
              onChangeText={(title) =>
                setForm((prev) => ({ ...prev, title: title }))
              }
            />
          </Input>
          {/* <FormControlError>
            <FormControlErrorText>Qual o nome da tarefa?</FormControlErrorText>
          </FormControlError> */}
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Quando?</FormControlLabelText>
          </FormControlLabel>

          <HStack space="sm">
            <Button
              variant="outline"
              className="h-14 rounded-lg flex-1"
              onPress={toggleDatePicker}
            >
              <ButtonIcon as={CalendarDaysIcon} />
              <ButtonText>{form.doAt.toLocaleDateString("pt-BR")}</ButtonText>
            </Button>
            <Button
              variant="outline"
              className="h-14 rounded-lg"
              onPress={() =>
                setForm((prev) => ({ ...prev, doAt: plusDay(today(), 1) }))
              }
            >
              <ButtonText>Amanhã</ButtonText>
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
          {/* <FormControlError>
            <FormControlErrorText>
              Para quando é esta tarefa?
            </FormControlErrorText>
          </FormControlError> */}
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
