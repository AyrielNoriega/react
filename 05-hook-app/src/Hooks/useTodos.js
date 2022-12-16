import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
];

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = () => {

    const [ todos, dispatchTodos] = useReducer( todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }

        dispatchTodos( action );
    }

    const handleDeleteTodo = (id) => {
        dispatchTodos({
            type: '[TODO] Remove todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatchTodos({
            type: '[TODO] Toggle todo',
            payload: id
        })
    }


    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        todosPendingCount: todos.filter(todo => !todo.done).length
    }
}
