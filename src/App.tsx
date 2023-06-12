import { useEffect, useRef, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { TodoProps } from "./interfaces";
import { nanoid } from "nanoid";

function App() {
    // Load tasks from cache
    let initialTasks: TodoProps[] = [];
    if (localStorage.getItem("tasks") !== null)
        initialTasks = JSON.parse(localStorage.getItem("tasks")!);

    const [currentFilter, setCurrentFilter] = useState<Number>(0);
    const [tasks, setTasks] = useState<TodoProps[]>(initialTasks);
    const inputRef = useRef<HTMLInputElement>(null);

    // Update cache everytime tasks state changes
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function getTasks(tasks: TodoProps[], currentFilter: Number): JSX.Element[] {
        /**
         * Returns an array of Todo Components from TodoProps[] parameter
         *
         * @param tasks - array of TodoProps to be converted to Todo components
         * @param currentFilter - number used to determine which tasks to filter
         * @returns array of Todo components based on input tasks and currentFilter
         */

        /*
         * Filter tasks with currentFilter as basis
         */
        const filteredTasks: TodoProps[] = tasks.filter((task) =>
            currentFilter === 1
                ? !task.completed
                : currentFilter === 2
                    ? task.completed
                    : true
        );

        /*
         * Map filteredTasks into new Todo components
         */
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
    }

    function toggleCompleted(id: String) {
        /**
         * Toggles internal state of a task with input id
         *
         * @param id - id of the task to toggle
         */
        setTasks(
            tasks.map((task) => {
                if (task.id === id) task.completed = !task.completed;
                return task;
            })
        );
    }

    function deleteTask(id: String) {
        /**
         * Deletes task with input id
         *
         * @param id - id of task to delete
         */
        setTasks(tasks.filter((task) => id !== task.id));
    }

    function addTask(newTaskName: string) {
        /**
         * Adds new task
         *
         * @param newTaskName - name of task to add
         */
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
    }

    return (
        <main>
            <h1>Do It Now!</h1>
            <div id="todo-input">
                <input id="todo-input-text" ref={inputRef} />
                <button
                    id="todo-input-button"
                    type="button"
                    onClick={() => {
                        addTask(inputRef.current!.value);
                        inputRef.current!.value = "";
                    }}
                >
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
