import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

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
            <div className="card-grid">
                {
                    images.map( (image) => {
                        return <GifItem
                                    key={image.id}
                                    { ...image } //esparcir las propiedades, SE UTILIZA CUANDO SE TIENEN MUCHAS propiedades 
                                />
                    })
                }
            </div>
        </>
    )
}
