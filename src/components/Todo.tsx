import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Todo.css";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { TodoProps } from "../interfaces";

export default function Todo(props: TodoProps) {
    return (
        <li className="todo-container" key={props.id.toString()}>
            {/* Todo Checkbox */}
            <input
                className={"todo-chk"}
                id={`${props.id}`}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleCompleteTask(props.id)}
            />
            {/* Todo Label */}
            <label className="todo-label" htmlFor="todo-0">
                {props.name}
            </label>
            {/* Todo button container */}
            <div id="todo-btn-container">
                {/* Todo Edit button */}
                <button className="todo-btn">
                    <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#000000" }} />
                </button>
                {/* Todo Delete button */}
                <button className="todo-btn" onClick={() => props.deleteTask(props.id)}>
                    <FontAwesomeIcon icon={faTrashCan} style={{ color: "#E30C0B" }} />
                </button>
            </div>
        </li>
    );
}
