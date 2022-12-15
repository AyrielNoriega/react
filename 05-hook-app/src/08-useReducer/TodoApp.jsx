import { useReducer } from "react";
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

    return (
        <>
            <h1>TodoApp: 10 <smap> pendientes: 2</smap></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="align-self-center">item 1</span>
                            <button className="btn btn-danger">Borrar</button>
                        </li>
                    </ul>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            placeholder="Que hay pa' hacer?"
                            className="form-control"
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
