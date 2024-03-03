import {useTodos} from "../TodoProvider.tsx";
import {TodoItem} from "./TodoItem.tsx";
import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";

export const TodoList = () => {
    const todoState = useTodos()

    return <>
        <h1 className="text-l font-bold">Task List</h1>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Status</TableHead>
                    <TableHead>Task</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todoState.todos.map(t => (
                    <TableRow key={t.id}>
                        <TodoItem todo={t}/>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </>
}