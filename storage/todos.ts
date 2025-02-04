import AsyncStorage from "@react-native-async-storage/async-storage";
import { TODOS } from "./config";
import { TodoType } from "@/@Types/TodoType";

export async function todosStoraged(): Promise<TodoType[]> {
  try {
    const todos = await AsyncStorage.getItem(TODOS);
    return JSON.parse(todos || "[]", (key, value) => {
      if (typeof key === "string" && key === "doAt") return new Date(value);
      return value;
    });
  } catch (error) {
    throw error;
  }
}

export async function storeTodos(todos: TodoType[]): Promise<void> {
  try {
    await AsyncStorage.setItem(TODOS, JSON.stringify(todos));
  } catch (error) {
    throw error;
  }
}
