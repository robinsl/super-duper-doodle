import { TodosProvider } from "./TodoProvider.tsx";
import {TodoCreate} from "@/Todo/components/TodoCreate.tsx";
import {TodoList} from "@/Todo/components/TodoList.tsx";

const TodoApp = () => {
    return <>
        <TodosProvider>
            <div className={"md:flex flex-col md:flex-row w-full p-4"}>
                <div className={"h-full space-y-4 items-center"}>
                    <TodoCreate />
                </div>
                <div className={"md:w-full w-full h-full ml-4 overflow-auto"}>
                    <TodoList />
                </div>
            </div>
        </TodosProvider>
    </>
}

export { TodoApp }