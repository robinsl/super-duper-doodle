export interface TodoState {
    todos: Todo[]
}

export interface Todo {
    id: number
    name: string
    completed: boolean
}

export enum TodoActionType {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    SET_TODOS,
}

interface SetTodoAction {
    type: TodoActionType.SET_TODOS
    todos: Todo[]
}

interface AddTodoAction {
    type: TodoActionType.ADD_TODO
    todo: Todo
}

interface DeleteTodoAction {
    type: TodoActionType.DELETE_TODO
    id: number
}

interface ToggleTodoAction {
    type: TodoActionType.TOGGLE_TODO
    id: number
}

export type TodoAction = SetTodoAction | AddTodoAction | DeleteTodoAction | ToggleTodoAction


export const TodoReducer = (state: TodoState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionType.SET_TODOS:
            return {...state, todos: [...action.todos] }
        case TodoActionType.ADD_TODO:
            return {...state, todos: [...state.todos, action.todo] }
        case TodoActionType.DELETE_TODO:
            return {...state, todos: state.todos.filter(t => t.id !== action.id)}
        case TodoActionType.TOGGLE_TODO:
            return {...state, todos: state.todos.map(t => {
                    if (t.id === action.id) {
                        return { ...t, completed: !t.completed };
                    }
                    return t
                })}
        default:
            throw Error('Unhandled action')
    }
}