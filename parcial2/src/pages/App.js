import { useReducer } from "react";
import { TodoReducer, TodoList } from "../components";
import { useFetch } from "../hooks/useFetch";



export const App = () => {
  const { data, isLoading } = useFetch(`https://jsonplaceholder.typicode.com/todos`)

  const initialState = [{
    userId: data.userId,
    id: data.id,
    title: data.title,
    completed: data.completed
  }]

  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState)


  return (
    <>
      <div className="todo-head">
        <h1>
          TODO
        </h1>
        <hr />
      </div>
      <div className="todo-body">
        {
          isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <TodoList todos={todos} />
          )
        }
      </div>
    </>
  );
}
