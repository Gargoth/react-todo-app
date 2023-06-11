import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Todo.css";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { TodoProps } from "../interfaces";


export default function Todo(props: TodoProps) {
    return (
        <div className="todo-container">
            <input
                className={"todo-chk"}
                id={`${props.id}`}
                type="checkbox"
                defaultChecked={props.completed}
            />
            <label className="todo-label" htmlFor="todo-0">
                {props.name}
            </label>
            <div id="todo-btn-container">
                <button className="todo-btn">
                    <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#000000" }} />
                </button>
                <button className="todo-btn">
                    <FontAwesomeIcon icon={faTrashCan} style={{ color: "#E30C0B" }} />
                </button>
            </div>
        </div>
    );
}
