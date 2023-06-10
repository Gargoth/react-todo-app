import "./App.css";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
    const [todoList, setTodoList] = useState<JSX.Element[]>([]);

    todoList.push(<Todo name="Eat" />)
    todoList.push(<Todo name="Sleep" />)
    todoList.push(<Todo name="Eat Again" />)

    return (
        <>
            {todoList}
        </>
    );
}

export default App;
