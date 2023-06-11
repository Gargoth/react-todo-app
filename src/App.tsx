import { useRef, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { AppProps, TodoProps } from "./interfaces";
import { nanoid } from "nanoid";

function App(props: AppProps) {
    const [currentFilter, setCurrentFilter] = useState<Number>(0);
    const [tasks, setTasks] = useState<TodoProps[]>(props.tasks);
    const inputRef = useRef<HTMLInputElement>(null);

    const getTasks = (tasks: TodoProps[], filter: Number) => {
        const taskList: JSX.Element[] = tasks
            .filter((task) =>
                filter === 1 ? !task.completed : filter === 2 ? task.completed : true
            )
            .map((task) => (
                <Todo
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                />
            ));

        return taskList;
    };

    const addTask = () => {
        const newTaskName: string | undefined = inputRef.current?.value;
        if (newTaskName) {
            setTasks([
                ...tasks,
                {
                    id: `todo-${nanoid()}`,
                    name: newTaskName,
                    completed: false,
                },
            ]);
        }

        console.log(tasks);
    };

    return (
        <main>
            <h1>Do It Now!</h1>
            <div id="todo-input">
                <input id="todo-input-text" ref={inputRef} />
                <button id="todo-input-button" type="button" onClick={addTask}>
                    +
                </button>
            </div>
            <div id="filter-container">
                <button
                    type="button"
                    className={
                        "filter-btn" + (currentFilter === 0 ? " active-filter" : "")
                    }
                    onClick={() => setCurrentFilter(0)}
                >
                    All
                </button>
                <button
                    type="button"
                    className={
                        "filter-btn" + (currentFilter === 1 ? " active-filter" : "")
                    }
                    onClick={() => setCurrentFilter(1)}
                >
                    Active
                </button>
                <button
                    type="button"
                    className={
                        "filter-btn" + (currentFilter === 2 ? " active-filter" : "")
                    }
                    onClick={() => setCurrentFilter(2)}
                >
                    Done
                </button>
            </div>

            {getTasks(tasks, currentFilter)}
        </main>
    );
}

export default App;
