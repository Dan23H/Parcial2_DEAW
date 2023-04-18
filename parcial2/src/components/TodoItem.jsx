export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li>
            <span>
                {todo.title}
            </span>
            <span>
                Completed: {todo.completed}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => { onDeleteTodo(todo.id) }}
            >
                Borrar
            </button>
        </li>
    )
}