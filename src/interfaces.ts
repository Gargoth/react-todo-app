export interface TodoProps {
    id: String;
    name: String;
    completed: boolean;
    toggleCompleteTask: Function;
    deleteTask: Function;
}
