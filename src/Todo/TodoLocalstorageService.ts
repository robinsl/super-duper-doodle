import {ITodoService} from "@/Todo/ITodoService.ts";
import {Todo} from "@/Todo/TodoState.ts";

export class TodoLocalstorageService implements ITodoService {
    private loadOrCreateEmpty(): Todo[] {
        const todosItem = localStorage.getItem("todos")
        if (todosItem) {
            return JSON.parse(todosItem);
        } else {
            const emptyTodos: Todo[] = [];
            localStorage.setItem("todos", JSON.stringify(emptyTodos));
            return emptyTodos;
        }
    }

    async GetAll (): Promise<Todo[]> {
        return this.loadOrCreateEmpty()
    }

    async Add(name: string): Promise<Todo> {
        const todos = this.loadOrCreateEmpty();
        const newTodo: Todo = { id: Date.now(), name, completed: false };
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        return newTodo
    }

    async Toggle(id: number): Promise<Todo> {
        const todos = this.loadOrCreateEmpty();
        const updatedTodos = todos.map((todo: Todo) => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo
        })
        localStorage.setItem("todos", JSON.stringify(updatedTodos));

        return todos.filter(t => t.id === id)[0]
    }

    async Delete(id: number): Promise<boolean> {
        const todos = this.loadOrCreateEmpty();
        const updatedTodos = todos.filter((todo: Todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return true
    }
}