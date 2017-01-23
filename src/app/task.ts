export interface Task {
    id: number;
    title: string;
    description: string;
    creationDate?: Date;
    completionDate?: Date;
    isDeleted: boolean;
    column?: TaskState;
}

export enum TaskState {
    Todo = 1,
    Today,
    InProgress,
    Done
}
