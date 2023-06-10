import "./Todo.css";

interface TodoProps {
    name: String;
}

export default function Todo(props: TodoProps) {
    return (
        <li>
            <input id="todo-0" type="checkbox" defaultChecked={false} />
            <label className="todo-label" htmlFor="todo-0">
                {props.name}
            </label>
        </li>
    );
}
