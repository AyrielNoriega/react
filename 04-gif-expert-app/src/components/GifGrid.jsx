import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }

    useEffect( () => {
        getImages();
    }, []);


    return (
        <>
            <h5>{ category}</h5>
            <ol>
                {
                    images.map( ({id, title}) => {
                        return <li key={ id }>
                                    { title }
                                </li>
                    })
                }
            </ol>
        </>
    )
}
