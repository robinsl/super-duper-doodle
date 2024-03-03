import {useState} from "react";
import {useTodoStateService} from "../TodoProvider.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";

export const TodoCreate = () => {
    const [name, setName] = useState("")
    const todoStateService = useTodoStateService();

    return (
        <Card className={"w-[350px]"}>
            <CardHeader>
                <CardTitle>Create Todo</CardTitle>
            </CardHeader>
            <CardContent>
                <div className={"grid w-full items-center gap-4"}>
                    <div className={"flex flex-col space-y-1.5"}>
                        <Label htmlFor={"TodoCreate"}>Task</Label>
                        <Input id={"TodoCreate"} placeholder={"New task"} value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={() => {
                    setName('')
                    todoStateService.AddTodo(name)
                }}>Submit</Button>
            </CardFooter>
        </Card>
    );
}