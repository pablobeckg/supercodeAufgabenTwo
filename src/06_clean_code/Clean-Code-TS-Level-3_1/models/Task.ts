export enum TaskType {
    Info,
    Urgent,
    NotUrgent,
}

export type Task = { 
    title: string, 
    type: TaskType,
    createdBy?: string
};