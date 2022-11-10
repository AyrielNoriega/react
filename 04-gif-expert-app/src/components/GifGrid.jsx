import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {



    getGifs();

    return (
        <>
            <div key={category}>
                <h3>{category}</h3>
                <p>{ category }</p>
            </div>
        </>
    )
}
