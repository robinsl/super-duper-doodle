import {Todo} from "@/Todo/TodoState.ts";

export interface ITodoService {
    GetAll: () => Promise<Todo[]>

    Add: (name: string) => Promise<Todo>

    Toggle: (id: number) => Promise<Todo>

    Delete: (id: number) => Promise<boolean>
}