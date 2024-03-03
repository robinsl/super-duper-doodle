import {createContext, Dispatch, useContext, useEffect, useReducer} from "react";
import {TodoReducer, TodoState, TodoAction} from "./TodoState.ts";
import {TodoStateService} from "@/Todo/TodoStateService.ts";
import {TodoLocalstorageService} from "@/Todo/TodoLocalstorageService.ts";

const TodoContext = createContext({} as TodoState)
const TodoDispatchContext = createContext((() => {}) as Dispatch<TodoAction>)
const TodoStateServiceContext = createContext({} as TodoStateService)

const TodosProvider = ({children}) => {
    const [todoState, dispatch] = useReducer(TodoReducer, { todos: [] })
    const lsService = new TodoLocalstorageService()
    const todoService = new TodoStateService(lsService, dispatch);

    useEffect(() => {
        todoService.GetTodos();
    }, []);

    return (
        <TodoContext.Provider value={todoState}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoStateServiceContext.Provider value={todoService}>
                    {children}
                </TodoStateServiceContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
}

const useTodos = () => useContext(TodoContext)
const useTodosDispatch = () => useContext(TodoDispatchContext)
const useTodoStateService = () => useContext(TodoStateServiceContext)

export {TodosProvider, useTodosDispatch, useTodos, useTodoStateService}