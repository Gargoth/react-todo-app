export interface AppProps {
    tasks: TodoProps[];
}

export interface TodoProps {
    id: String;
    name: String;
    completed: boolean;
}
