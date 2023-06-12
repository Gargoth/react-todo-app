import { useRef, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { AppProps, TodoProps } from "./interfaces";
import { nanoid } from "nanoid";

function App(props: AppProps) {
    const [currentFilter, setCurrentFilter] = useState<Number>(0);
    const [tasks, setTasks] = useState<TodoProps[]>(props.tasks);
    const inputRef = useRef<HTMLInputElement>(null);
    let filteredTasks: TodoProps[];

    const getTasks = (tasks: TodoProps[]): JSX.Element[] => {
        filteredTasks = tasks.filter((task) =>
            currentFilter === 1 ? !task.completed : currentFilter === 2 ? task.completed : true
        );
        const taskList: JSX.Element[] = filteredTasks.map((task) => (
            <Todo
                id={task.id}
                name={task.name}
                completed={task.completed}
                toggleCompleteTask={toggleCompleted}
                deleteTask={deleteTask}
            />
        ));

        return taskList;
    };

    const toggleCompleted = (id: String) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) task.completed = !task.completed;
                return task;
            })
        );
    };

    const deleteTask = (id: String) => {
        setTasks(tasks.filter((task) => id !== task.id));
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
                    toggleCompleteTask: toggleCompleted,
                    deleteTask: deleteTask,
                },
            ]);
        }
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

            {getTasks(tasks)}
        </main>
    );
}

export default App;
