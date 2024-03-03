import {TodoAction, TodoActionType} from "@/Todo/TodoState.ts";
import {Dispatch} from "react";
import {ITodoService} from "@/Todo/ITodoService.ts";

export class TodoStateService {
    private readonly dispatch: Dispatch<TodoAction>
    private readonly service: ITodoService

    constructor(service: ITodoService, dispatch: Dispatch<TodoAction>) {
        this.service = service
        this.dispatch = dispatch
    }

    async GetTodos(): Promise<void> {
        try {
            const todos = await this.service.GetAll()
            this.dispatch({ type: TodoActionType.SET_TODOS, todos });
        } catch (error) {
            throw Error(`TodoService.GetTodos: ${error}`)
        }
    }

    async AddTodo(name: string): Promise<void> {
        try {
            const todo = await this.service.Add(name)
            this.dispatch({ type: TodoActionType.ADD_TODO, todo });
        } catch (error) {
            throw Error(`TodoService.AddTodo: ${error}`)
        }
    }
    
    async DeleteTodo(id: number): Promise<void> {
        try {
            const success = await this.service.Delete(id)
            if(success) {
                this.dispatch({ type: TodoActionType.DELETE_TODO, id });
            }
        } catch (error) {
            throw Error(`TodoService.DeleteTodo: ${error}`)
        }
    }
    
    async ToggleTodo(id: number): Promise<void> {
        try {
            const todo = await this.service.Toggle(id)
            this.dispatch({ type: TodoActionType.TOGGLE_TODO, id: todo.id });
        } catch (error) {
            throw Error(`TodoService.ToggleTodo: ${error}`)
        }
    }
}