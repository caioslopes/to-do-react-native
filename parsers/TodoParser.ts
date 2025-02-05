import { TodoType } from "@/@Types/TodoType";
import { today } from "@/utils/cDates";
import { DomainParser } from "./domainParser";

export class TodoParser implements DomainParser<any, TodoType> {
  parse(data: any): TodoType {
    const todo = {} as TodoType;

    todo.id = data.id;
    todo.title = data.title;
    todo.completed = data.completed;
    todo.doAt = today();

    return todo;
  }
}
