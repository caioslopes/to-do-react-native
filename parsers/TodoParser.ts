import { TodoType } from "@/@Types/TodoType";
import { today } from "@/utils/cDates";
import { DomainParser } from "@/utils/domainParser";

export class TodoParser implements DomainParser<any, TodoType> {
  parse(data: any): TodoType {
    const todo = {} as TodoType;

    todo.id = data.id;
    todo.name = data.title;
    todo.completed = data.completed;
    todo.description = "Lorem ipsum todo api";
    todo.doAt = today();

    return todo;
  }
}
