import { TaskType, Task } from "./models/Task";
import SortDirection from "./models/SortDirection";

export {};


let tasks: Task[] = [];


function getUserInputsThroughPrompts(amountOfTaskPrompts: number): [string[], string?] {
    let userInputTasks: string[] = []

    let userInputName: string = prompt("Bitte geben Sie Ihren Namen ein:")?.trim() ?? '';

    for (let index = 0; index < amountOfTaskPrompts; index++) {
        let taskInput: string;
    
        if (index === 0){
            taskInput = prompt("Bitte geben Sie eine Aufgabe ein:")?.trim() ?? '';
        } else {
            taskInput = prompt("Bitte geben Sie noch eine Aufgabe ein:")?.trim() ?? '';
        }

        if (taskInput) {
            userInputTasks.push(taskInput)
        }
    }
    return userInputName ? [userInputTasks, userInputName] : [userInputTasks]
}

function createTasksFromUserInputs(taskType: TaskType = TaskType.NotUrgent): void {
    const userInputs: [string[], string?] = getUserInputsThroughPrompts(3)
    const userInputTasks: string[] = userInputs[0]
    const userInputName: string | undefined = userInputs[1]

    userInputTasks.forEach((userInputTask: string) => {
        if (userInputName){
            tasks.push({ title: userInputTask, type: taskType, createdBy: userInputName });
            console.log(`Aufgabe erstellt: ${userInputTask} von ${userInputName}`);
        } else {
            tasks.push({ title: userInputTask, type: taskType });
            console.log(`Aufgabe erstellt: ${userInputTask}`);
        }
    })
}

function sortTasksBySortDirection(tasks: Task[], sortDirection: SortDirection): void {
    switch (sortDirection) {
        case SortDirection.Ascending:
            tasks.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case SortDirection.Reverse:
            tasks.reverse()
            break;
        case SortDirection.None:
            break;
    }
    console.log(tasks);
}

function printAmountOfTasks(): void {
    const maximumAmountOfTasks: number = 10000

    if (tasks.length > maximumAmountOfTasks) {
      console.log(`Die Anzahl der Aufgaben liegt außerhalb des erwarteten Bereichs.`);
    } else {
        console.log(`Die Anzahl der Aufgaben liegt bei ${tasks.length}.`);
    }
}

createTasksFromUserInputs()
sortTasksBySortDirection(tasks, SortDirection.Ascending);
printAmountOfTasks()