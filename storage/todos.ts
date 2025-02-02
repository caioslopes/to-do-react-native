import AsyncStorage from "@react-native-async-storage/async-storage";
import { TODOS } from "./config";
import { TodoType } from "@/@Types/TodoType";

export async function todosStoraged(): Promise<TodoType[]> {
  try {
    const todos = await AsyncStorage.getItem(TODOS);
    return JSON.parse(todos || "[]");
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
