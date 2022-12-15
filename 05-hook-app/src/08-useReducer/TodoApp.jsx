import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 2,
        description: 'Recolectar la piedra del fuego',
        done: false,
    },
];


export const TodoApp = () => {

    const [ todos, dispatchTodos] = useReducer( todoReducer, initialState )

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }

        dispatchTodos( action );
    }

    return (
        <>
            <h1>TodoApp: 10 <span> pendientes: 2</span></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                        <TodoList todos={ todos }/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>
        </>
    )
}
